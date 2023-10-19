import GardenWithChildren from './components/GardenWithChildren.js'
import GardenTree from './components/GardenTree.js'
import GardenApple from './components/GardenApple.js'

const treesTotalElement = document.querySelector('#trees')
const applesTotalElement = document.querySelector('#apples')
const applesOnTreesElement = document.querySelector('#applesOnTrees')
const applesSpoiledElement = document.querySelector('#applesSpoiled')
const buttonElement = document.querySelector('#passDay')

const createApple = () => new GardenApple()

function createTree() {
  const tree = new GardenTree(createApple)
  tree.createChildren()
  return tree
}

const garden = new GardenWithChildren(createTree)

function getInfoAboutGarden() {
  let treesTotal = 0
  let applesTotal = 0
  let applesOnTrees = 0
  let applesSpoiled = 0

  garden.children.forEach(tree => {
    treesTotal++

    tree.children.forEach(item => {
      applesTotal++

      if (!item.fallen) {
        applesOnTrees++
      } else if (item.spoiled) {
        applesSpoiled++
      }
    })
  })

  return { treesTotal, applesTotal, applesOnTrees, applesSpoiled }
}

function passDay() {
  garden.passDay()
  garden.children.forEach(tree => {
    tree.passDay()
    tree.children.forEach(item => {
      item.passDay()
    })
  })
}

function refreshLayout(configs) {
  const { treesTotal, applesTotal, applesOnTrees, applesSpoiled } = configs
  treesTotalElement.textContent = treesTotal
  applesTotalElement.textContent = applesTotal
  applesOnTreesElement.textContent = applesOnTrees
  applesSpoiledElement.textContent = applesSpoiled
}

function handleButtonClick() {
  passDay()
  refreshLayout(getInfoAboutGarden())
}

garden.createChildren()
refreshLayout(getInfoAboutGarden())
buttonElement.addEventListener('click', handleButtonClick)
