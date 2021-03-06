import 'moment';
import 'moment/locale/pt-br';
import moment from 'moment-timezone';

moment().locale('pt-br');
// color 1 = Cor das Informacoes
export const color1 = 'rgb(84, 76, 126)'
// color 2 = Cor dd Fundo
export const color2 = 'rgb(255, 255, 255)'
export const color3 = 'rgb(84, 76, 100)'
export const color4 = 'rgb(120, 120, 120)'

export const fontTitle = 'Kalam-Regular'

export const styleTitle = {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: fontTitle,
}

export const borderRadius = 5

export const categorys = [{
    id: Math.random(),
    image: require('../../assets/imgs/brinquedos.png'),
    title: 'Brinquedos'
},{
    id: Math.random(),
    image: require('../../assets/imgs/calcados.png'),
    title: 'Calçados'
},{
    id: Math.random(),
    image: require('../../assets/imgs/eletrodomesticos.png'),
    title: 'Eletrodomésticos'
},{
    id: Math.random(),
    image: require('../../assets/imgs/eletroeletronicos.png'),
    title: 'Eletroeletrônicos'
},{
    id: Math.random(),
    image: require('../../assets/imgs/higienePessoal.png'),
    title: 'Higiene Pessoal'
},{
    id: Math.random(),
    image: require('../../assets/imgs/livros.png'),
    title: 'Livros'
},{
    id: Math.random(),
    image: require('../../assets/imgs/materialConstrucao.png'),
    title: 'Material de Construção'
},{
    id: Math.random(),
    image: require('../../assets/imgs/materialLimpeza.png'),
    title: 'Material de Limpeza'
},{
    id: Math.random(),
    image: require('../../assets/imgs/materialEscolar.png'),
    title: 'Material Escolar'
},{
    id: Math.random(),
    image: require('../../assets/imgs/moveis.png'),
    title: 'Móveis'
},{
    id: Math.random(),
    image: require('../../assets/imgs/outros.png'),
    title: 'Outros'
},{
    id: Math.random(),
    image: require('../../assets/imgs/roupas.png'),
    title: 'Roupas'
}]

export const converTime = () => {
    moment.updateLocale('pt-br', {
        months : [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
            "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ],
        monthsShort : [
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ],
        weekdaysMin : ["Dom", "Seg", "Ter", "Quar", "Quin", "Sex", "Sab"],
        weekdays : [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ],
        relativeTime : {
            future: "em %s",
            past: "%s atrás",
            s: 'alguns segundos',
            ss: '%d segundos',
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            w: "uma semana",
            ww: "%d semanas",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        longDateFormat : {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            l: "D/M/YYYY",
            LL: "Do MMMM YYYY",
            ll: "D MMM YYYY",
            LLL: "Do MMMM YYYY LT",
            lll: "D MMM YYYY LT",
            LLLL: "dddd, MMMM Do YYYY LT",
            llll: "dddd, MMM D YYYY LT"
        },
    });
}