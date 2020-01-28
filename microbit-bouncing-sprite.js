let character = game.createSprite(2, 2)

basic.forever(function () {
    character.move(1)
    character.ifOnEdgeBounce()
    input.onButtonPressed(Button.A, () => {
        character.turn(Direction.Right, 45)
    })
    input.onButtonPressed(Button.B, () => {
        character.set(LedSpriteProperty.X, Math.randomRange(0, 4))
        character.set(LedSpriteProperty.Y, Math.randomRange(0, 4))
    })
})
