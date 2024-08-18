AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStempEvento = dataEvento.getTime();

const contaHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStempEvento - timeStampAtual;

    const diaEmMS= 1000 * 60 * 60 * 24;
    const horaEmMS= 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento /  diaEmMS);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMS) / horaEmMS);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horaEmMS / minutoEmMS);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(distanciaAteEvento < 0){
        clearInterval(contaHoras);

        document.getElementById('contador').innerHTML = 'Evento já aconteceu!'
    }
}, 1000)