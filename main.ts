function Game (speed: number) {
    chaser.turn(Direction.Right, randint(0, 90))
    chaser.move(1)
    chaser.ifOnEdgeBounce()
    if (chaser.isTouchingEdge()) {
        game.setScore(game.score() + 1)
    }
    if (chaser.isTouching(Player)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
        basic.pause(speed)
    }
}
input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let Player: game.LedSprite = null
let chaser: game.LedSprite = null
game.startCountdown(30000)
chaser = game.createSprite(0, 5)
Player = game.createSprite(2, 0)
Player.turn(Direction.Right, 90)
Player.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
    if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 800)) {
        Game(250)
    } else if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 400)) {
        Game(400)
    } else {
        Game(750)
    }
})
