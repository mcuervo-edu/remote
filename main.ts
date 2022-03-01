radio.setGroup(1)
let cursor = game.createSprite(2, 2)
let dx = 0
let dy = 0
basic.forever(function () {
    dx = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 4)
    dy = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 4)
    cursor.set(LedSpriteProperty.X, dx)
    cursor.set(LedSpriteProperty.Y, dy)
    radio.sendValue("dx", dx)
    radio.sendValue("dy", dy)
})
