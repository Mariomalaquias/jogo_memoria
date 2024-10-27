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
  const [shownCount, setShownCount] = useState<number>(0) //verifica se ja tem 2 cartas viradas
  const [gridItens, setGridItens] = useState<GridItemType[]>([]); //saber quantas figuras ja estão viradas no grid

  useEffect(() => start_game(), []);

  useEffect(() => {
    const timer = setInterval(() =>{
      if(playing === true) {
        setTimeElapsed(timeElapsed + 1);
      } 
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  function start_game() {
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
    <div className="">
      <header>
        <h1>Jogo da Memória dos Vingadores</h1>
      </header>
      <main className="flex justify-evenly h-screen">
        <div className="self-center">
          <h2>Jogo da Memória</h2>
          <div>
          {timeElapsed}
            <InfoItem label={'Contador'} value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label={'Movimentos Executados'} value={'00'} />
          </div>
          <Button name={'Iniciar'} OnClick={start_game} />
          
        </div>
        <div className=" self-center ">
          <div className="grid gap-4 grid-cols-4 grid-rows-4 w-[800px]">
            {gridItens.map((item, index) =>(//esse gridItens é do useState.
              <div className="bg-slate-500">
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
