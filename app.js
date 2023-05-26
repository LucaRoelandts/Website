const gameBoard=  document.querySelector("#gameboard")
const playerDisplay=  document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

const width=8

const startPieces=[
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard(){
    startPieces.forEach((startPieces, index) =>{
        const square=document.createElement('div')
        square.classList.add('square')
        square.innerHTML= startPieces
        square.firstChild ?.setAttribute('draggable', true)
        square.setAttribute('square-id', index)
        const row= Math.floor( (63-index) / 8)+ 1
        if(row%2==0){
            square.classList.add(index%2==0 ? "beige" : "brown")
        }else{
            square.classList.add(index%2==0 ? "brown" : "beige")
        }
        if(index >= 48 ){
            square.firstChild.classList.add('white')
        }
        gameBoard.append(square)
    })
}
createBoard()


 const allSquare = document.querySelectorAll("#gameboard .square")
 
 
 allSquare.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
 })

 let startPositionId
 let draggedElement

 function dragStart(e){
    startpositionId=e.target.parentNode.getAttribute('square-id')
    draggedElement= e.target
 }

 function dragOver(e){
    e.preventDefault()
 }

 function dragDrop(){
    
 }