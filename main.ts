input.onButtonPressed(Button.A, function () {
    車.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    岩1 = game.createSprite(randint(0, 4), 0)
    岩2 = game.createSprite(randint(0, 4), 0)
    岩3 = game.createSprite(randint(0, 4), 0)
    岩4 = game.createSprite(randint(0, 4), 0)
    岩1のスタートした時間 = input.runningTime()
    岩2のスタートした時間 = input.runningTime()
    岩3のスタートした時間 = input.runningTime()
    岩4のスタートした時間 = input.runningTime()
    車 = game.createSprite(2, 4)
    game.setLife(3)
    得点 = 0
})
input.onButtonPressed(Button.B, function () {
    車.change(LedSpriteProperty.X, 1)
})
let 岩4のスタートからの時間 = 0
let 岩3のスタートからの時間 = 0
let 岩2のスタートからの時間 = 0
let 岩1のスタートからの時間 = 0
let 得点 = 0
let 車: game.LedSprite = null
let 岩4のスタートした時間 = 0
let 岩3のスタートした時間 = 0
let 岩2のスタートした時間 = 0
let 岩1のスタートした時間 = 0
let 岩4: game.LedSprite = null
let 岩3: game.LedSprite = null
let 岩2: game.LedSprite = null
let 岩1: game.LedSprite = null
岩1 = game.createSprite(randint(0, 4), 0)
岩2 = game.createSprite(randint(0, 4), 0)
岩3 = game.createSprite(randint(0, 4), 0)
岩4 = game.createSprite(randint(0, 4), 0)
岩1のスタートした時間 = input.runningTime()
岩2のスタートした時間 = input.runningTime()
岩3のスタートした時間 = input.runningTime()
岩4のスタートした時間 = input.runningTime()
車 = game.createSprite(2, 4)
game.setLife(5)
得点 = 0
basic.forever(function () {
    岩1のスタートからの時間 = input.runningTime() - 岩1のスタートした時間
    岩2のスタートからの時間 = input.runningTime() - 岩2のスタートした時間
    岩3のスタートからの時間 = input.runningTime() - 岩3のスタートした時間
    岩4のスタートからの時間 = input.runningTime() - 岩4のスタートした時間
    if (200 < 岩1のスタートからの時間) {
        岩1.change(LedSpriteProperty.Y, 1)
        岩1のスタートした時間 = input.runningTime()
        岩1のスタートからの時間 = 0
    }
    if (250 < 岩2のスタートからの時間) {
        岩2.change(LedSpriteProperty.Y, 1)
        岩2のスタートした時間 = input.runningTime()
        岩2のスタートからの時間 = 0
    }
    if (300 < 岩3のスタートからの時間) {
        岩3.change(LedSpriteProperty.Y, 1)
        岩3のスタートした時間 = input.runningTime()
        岩3のスタートからの時間 = 0
    }
    if (350 < 岩4のスタートからの時間) {
        岩4.change(LedSpriteProperty.Y, 1)
        岩4のスタートした時間 = input.runningTime()
        岩4のスタートからの時間 = 0
    }
    if (岩1.get(LedSpriteProperty.Y) == 4) {
        if (車.get(LedSpriteProperty.X) == 岩1.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        岩1.delete()
        岩1 = game.createSprite(randint(0, 4), 0)
    }
    if (岩2.get(LedSpriteProperty.Y) == 4) {
        if (車.get(LedSpriteProperty.X) == 岩2.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        岩2.delete()
        岩2 = game.createSprite(randint(0, 4), 0)
    }
    if (岩3.get(LedSpriteProperty.Y) == 4) {
        if (車.get(LedSpriteProperty.X) == 岩3.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        岩3.delete()
        岩3 = game.createSprite(randint(0, 4), 0)
    }
    if (岩4.get(LedSpriteProperty.Y) == 4) {
        if (車.get(LedSpriteProperty.X) == 岩4.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        岩4.delete()
        岩4 = game.createSprite(randint(0, 4), 0)
    }
    game.setScore(得点)
})
