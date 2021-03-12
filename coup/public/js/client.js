import createState from './state.js'

export default function createClient(){

    function init(document) {
        
        const state = createState()

        CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
            if (w < 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            this.beginPath();
            this.moveTo(x+r, y);
            this.arcTo(x+w, y,   x+w, y+h, r);
            this.arcTo(x+w, y+h, x,   y+h, r);
            this.arcTo(x,   y+h, x,   y,   r);
            this.arcTo(x,   y,   x+w, y,   r);
            this.closePath();
            return this;
        }
            
        function renderScreen(state) {
            const screen = document.getElementById('screen')
            const context = screen.getContext('2d')

            context.fillStyle = 'white'
            context.fillRect(0, 0, screen.width, screen.height)

            for (var playerId in state.players) {

                const player = state.players[playerId]

                const card1 = new Image()
                card1.src = `/images/cards/${player.cards.card1Id}.png` 

                card1.addEventListener('load', () => {
                    context.drawImage(card1, player.x, player.y, state.cards.width, state.cards.height)
                })

                const card2 = new Image()
                card2.src = `/images/cards/${player.cards.card2Id}.png` 

                card1.addEventListener('load', () => {
                    context.drawImage(card2, player.x + state.cards.width + 10, player.y, state.cards.width, state.cards.height)
                })

                context.fillStyle = 'white'
                context.strokeStyle = '#CCC'
                context.roundRect(player.x, player.y + state.cards.height + 10, state.cards.width * 2 + 10, 30, 7).stroke()
                context.font = '20px adobe-garamond-pro'
                context.fillStyle = '#333'
                context.fillText(player.name, player.x + 7, player.y + state.cards.height + 32)
                context.fillText(`$ ${(player.coins < 10 ? ' ' : '')}${player.coins}`, player.x + state.cards.width * 2 + 10 - 42, player.y + state.cards.height + 32)
            }
        }
            
        renderScreen(state)    
}


    return {
        init
    }

}