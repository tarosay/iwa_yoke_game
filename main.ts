input.onButtonPressed(Button.A, function () {
    ロケット.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    玉1 = game.createSprite(randint(0, 4), 0)
    玉2 = game.createSprite(randint(0, 4), 0)
    玉3 = game.createSprite(randint(0, 4), 0)
    玉4 = game.createSprite(randint(0, 4), 0)
    玉1のスタートした時間 = input.runningTime()
    玉2のスタートした時間 = input.runningTime()
    玉3のスタートした時間 = input.runningTime()
    玉4のスタートした時間 = input.runningTime()
    ロケット = game.createSprite(2, 4)
    game.setLife(3)
    得点 = 0
})
input.onButtonPressed(Button.B, function () {
    ロケット.change(LedSpriteProperty.X, 1)
})
let 玉4のスタートからの時間 = 0
let 玉3のスタートからの時間 = 0
let 玉2のスタートからの時間 = 0
let 玉1のスタートからの時間 = 0
let 得点 = 0
let ロケット: game.LedSprite = null
let 玉4のスタートした時間 = 0
let 玉3のスタートした時間 = 0
let 玉2のスタートした時間 = 0
let 玉1のスタートした時間 = 0
let 玉4: game.LedSprite = null
let 玉3: game.LedSprite = null
let 玉2: game.LedSprite = null
let 玉1: game.LedSprite = null
玉1 = game.createSprite(randint(0, 4), 0)
玉2 = game.createSprite(randint(0, 4), 0)
玉3 = game.createSprite(randint(0, 4), 0)
玉4 = game.createSprite(randint(0, 4), 0)
玉1のスタートした時間 = input.runningTime()
玉2のスタートした時間 = input.runningTime()
玉3のスタートした時間 = input.runningTime()
玉4のスタートした時間 = input.runningTime()
ロケット = game.createSprite(2, 4)
game.setLife(5)
得点 = 0
basic.forever(function () {
    玉1のスタートからの時間 = input.runningTime() - 玉1のスタートした時間
    玉2のスタートからの時間 = input.runningTime() - 玉2のスタートした時間
    玉3のスタートからの時間 = input.runningTime() - 玉3のスタートした時間
    玉4のスタートからの時間 = input.runningTime() - 玉4のスタートした時間
    if (200 < 玉1のスタートからの時間) {
        玉1.change(LedSpriteProperty.Y, 1)
        玉1のスタートした時間 = input.runningTime()
        玉1のスタートからの時間 = 0
    }
    if (250 < 玉2のスタートからの時間) {
        玉2.change(LedSpriteProperty.Y, 1)
        玉2のスタートした時間 = input.runningTime()
        玉2のスタートからの時間 = 0
    }
    if (300 < 玉3のスタートからの時間) {
        玉3.change(LedSpriteProperty.Y, 1)
        玉3のスタートした時間 = input.runningTime()
        玉3のスタートからの時間 = 0
    }
    if (350 < 玉4のスタートからの時間) {
        玉4.change(LedSpriteProperty.Y, 1)
        玉4のスタートした時間 = input.runningTime()
        玉4のスタートからの時間 = 0
    }
    if (玉1.get(LedSpriteProperty.Y) == 4) {
        if (ロケット.get(LedSpriteProperty.X) == 玉1.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        玉1.delete()
        玉1 = game.createSprite(randint(0, 4), 0)
    }
    if (玉2.get(LedSpriteProperty.Y) == 4) {
        if (ロケット.get(LedSpriteProperty.X) == 玉2.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        玉2.delete()
        玉2 = game.createSprite(randint(0, 4), 0)
    }
    if (玉3.get(LedSpriteProperty.Y) == 4) {
        if (ロケット.get(LedSpriteProperty.X) == 玉3.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        玉3.delete()
        玉3 = game.createSprite(randint(0, 4), 0)
    }
    if (玉4.get(LedSpriteProperty.Y) == 4) {
        if (ロケット.get(LedSpriteProperty.X) == 玉4.get(LedSpriteProperty.X)) {
            game.removeLife(1)
        } else {
            得点 += 1
        }
        玉4.delete()
        玉4 = game.createSprite(randint(0, 4), 0)
    }
    game.setScore(得点)
})
