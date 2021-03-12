export default function createState() {

    return {
        players: {
            'player1': {
                name: 'Feio',
                cards: {
                    card1Id: 'duque',
                    card2Id: 'condessa'
                },
                x: 20,
                y: 30
            },
            'player2': {
                name: 'Andrezinho',
                cards: {
                    card1Id: 'embaixador',
                    card2Id: 'condessa'
                },
                x: 481.75,
                y: 10
            },
            'player3': {
                name: 'Thiaguinho',
                cards: {
                    card1Id: 'assassino',
                    card2Id: 'inquisidor'
                },
                x: 942.5,
                y: 30
            },
            'player4': {
                name: 'Jão',
                cards: {
                    card1Id: 'embaixador',
                    card2Id: 'capitao'
                },
                x: 191.25,
                y: 390
            },
            'player5': {
                name: 'Juninho',
                cards: {
                    card1Id: 'capitao',
                    card2Id: 'assassino'
                },
                x: 771.25,
                y: 390
            }
        },
        cards: {
            ids: ['duque', 'embaixador', 'condessa', 'inquisidor', 'assassino', 'capitao'],
            width: 116.25,
            height: 200
        }
    }
}