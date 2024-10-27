export const formatTimeElapsed = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - (minutes * 60);

    let secondsTens = `${seconds < 10 ? '0' + seconds : seconds}`;
    let minutesTens = `${minutes < 10 ? '0' + minutes : seconds}`;

    return `${minutesTens} : ${secondsTens}`;

}