'use client'

import Button from "@/components/Button";
import { GridItem } from "@/components/GridItem";
import InfoItem from "@/components/InfoItem";
import { Items } from "@/data/items";
import { GridItemType } from "@/types/GridItensTypes";
import Image from "next/image";
import posterFundo from '../fotos/poster-fundoP.jpg'
import { useEffect, useState } from "react";
import { formatTimeElapsed } from "@/helpers/FormatTimeElapsed";

export default function Home() {

  const [playing, setPlaying] = useState<boolean>(false); //para saber se o jogo esta rolando
  const [timeElapsed, setTimeElapsed] = useState<number>(0); //contar o tempo
  const [moveCount, setMoveCount] = useState<number>(0); //conta quantos movimentos o jogador usou
  const [shownCount, setShownCount] = useState<number>(0); //verifica se ja tem 2 cartas viradas
  const [gridItens, setGridItens] = useState<GridItemType[]>([]); //saber quantas figuras ja estão viradas no grid

  useEffect(() => start_game(), []);

  useEffect(() => {
    const timer = setInterval(() =>{
      if(playing) {
        setTimeElapsed(timeElapsed + 1);
      } 
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  //verificar se os 2 grids abertos são iguais
  useEffect(() => {
    if(shownCount === 2) {
      let opened = gridItens.filter(item => item.shown === true);
      if(opened.length === 2) {
        // se forem iguais transformar os 2 em permanentShown true
        if(opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItens];
          for(let i in tmpGrid) {
            if(tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItens(tmpGrid);
          setShownCount(0);
        }else {
          //se os 2 abertos forem diferentes fechar eles
          setTimeout(()=>{
            let tmpGrid = [...gridItens];
            for(let i in tmpGrid) {
            tmpGrid[i].shown = false;
            }
            setGridItens(tmpGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount => moveCount + 1);
      }
    } 
  }, [shownCount, gridItens]);

  // verifica se o jogo acabou
  useEffect(() => {
    if (moveCount > 0 && gridItens.every(item => item.permanentShown === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItens]);

  const  start_game = () => {
    //Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //criar um grid vazio
    let tmpGrid: GridItemType[] = [];
    for (let i =0; i < (Items.length *2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    //preencher o grid
    for(let w = 0; w < 2; w++) {//esse primeiro for é para criar o grid de 6 2 vezes
      for(let i = 0; i < Items.length; i++) {
        let pos = -1; //não pode ser zero porque a posição 0 da figura existe.
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (Items.length * 2));
        }
        
        tmpGrid[pos].item = i;
      }
    }
    //jogar dentro do useState
    setGridItens(tmpGrid);

    // começar o jogo
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItens];
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1); 
      }
      setGridItens(tmpGrid);
    }

  }

  return (
    <div className="bg-red-600">
      <header>
        <h1 className="text-center text-5xl font-bold p-8 bg-amber-400 text-red-600">Jogo da Memória dos Vingadores</h1>
      </header>
      <main className="flex justify-evenly h-screen" >
        <div className="items-center mt-40">
          <h2 className="text-amber-400 text-center text-5xl font-bold p-5">Jogo da Memória</h2>
          <div>
            <InfoItem label='Contador' value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label='Movimentos Executados' value={moveCount.toString()} />
          </div>
          <Button name={'Iniciar'} OnClick={start_game}  />
          
        </div>
        <div className=" self-center ">
          <div className="grid gap-4 grid-cols-4 grid-rows-4 w-[800px] ">
            {gridItens.map((item, index) =>(//esse gridItens é do useState.
              <div className="">
                <GridItem 
                  key={index}
                  item={item}
                  onClick = {() => handleItemClick(index)}
                />
              </div>
            ))}
          </div>
          
        </div>
        
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
