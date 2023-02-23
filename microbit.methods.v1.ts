function randint(l : number,h: number) : number {
    return randint(l,h);
}

namespace basic {
    export function showString(str: string) {}
    export function showIcon(icon : IconNames) {}
    export function showNumber(num : number) {}
    export function clearScreen(){}
    export function pause(number : number){}
    export function showLeds(lds: string){}
    export function showArrow(arrow : ArrowNames){}
    export function forever(func: Function) : void {}
}

namespace input {
    export function onButtonPressed(Button : Button , callback : Function) : void {}
    export function onGesture(Gesture : Gesture , callback : Function) : void {}
    export function onPinPressed(Pin : TouchPin, callback : Function): void {}
    export function buttonIsPressed(Button : Button) : boolean { return buttonIsPressed(Button) }
    export function pinIsPressed(Pin : TouchPin) : boolean { return pinIsPressed(Pin) }
    export function acceleration(Dimention : Dimension) : number { return acceleration(Dimention) }
    export function lightLevel() : number { return lightLevel() }
    export function compassHeading() : number { return compassHeading() }
    export function isGesture(Gesture: Gesture) : boolean { return isGesture(Gesture) }
    export function temperature() : number { return temperature() }
    export function rotation(Rotation : Rotation) : number { return rotation(Rotation) }
    export function magneticForce(Dimension : Dimension) : number { return magneticForce(Dimension) }
    export function runningTime() : number { return runningTime() }
    export function runningTimeMicros() : number { return runningTimeMicros() }
    /** @deprecated */
    export function calibrateCompass() : void {}
    export function onPinReleased(Pin : TouchPin, func : Function) : void {}
    export function setAccelerometerRange(accelerometer : AcceleratorRange) : void {}
}

// Micro bit v1 deha dekinainode
/** @deprecated */
namespace music {
    export function playMelody(melody: string, tempo: number) : void {}
}

namespace led {
    export function plot(x: number, y: number): void {}
    export function toggle(x: number, y: number): void {}
    export function unplot(x: number, y: number): void {}
    export function point(x: number, y: number): boolean { return point(x, y); }
    export function plotBarGraph(value: number, high: number): void {}
    export function plotBrightness(x: number, y:number , brightness: number): void {}
    export function pointBrightness(x: number, y: number) : number { return pointBrightness(x, y); }
    export function brightness() : void {}
    export function setBrightness(brightness: number) : void {}
    export function enable(bool : boolean) : void {}
    export function stopAnimation() : void {}
    export function setDisplayMode(Displaymode: DisplayMode) : void {}
}

namespace radio {
    export function setGroup(group : number) : void {}
    export function sendMessage(msg : number) : void {} 
    export function onReceivedMessage(msg : number, func : Function): void {}
    export function __message(number : number) : number { return __message(number)}
    export function sendNumber(number : number) : void {}
    export function sendValue(name : string, value : number) : void {}
    export function onReceivedNumber(func : (receivedNumber : number) => void): void {}
    export function onReceivedValue(func : (name : string, value : number) => void): void {}
    export function onRecievedString(func : (receivedString : string) => void): void {}
    export function recievedPacket(radioPacketProperty : RadioPacketProperty  |  number): number { return recievedPacket(radioPacketProperty)}
}

namespace game {
    export class LedSprite {
       delete() : void {}
       isDeleted() : boolean { return this.isDeleted()}
       move(number: number) : void {}
       turn(direction: Direction, turn : number) : void {}
       change(LedSpriteProperty: LedSpriteProperty, num: number) : void {}
       set(LedSpriteProperty: LedSpriteProperty, value: number) : void {}
       get(LedSpriteProperty: LedSpriteProperty) : number { return this.get(LedSpriteProperty) }
       isTouching(other : game.LedSprite) : boolean { return this.isTouching(this) }
       isTouchingEdge() : boolean { return this.isTouchingEdge() }
       ifOnEdgeBounce() : void {}
       on() : void {}
       off() : void {}
    }
    export function createSprite(x : number, y : number) : game.LedSprite { return createSprite(x, y) }
    export function addLife(life : number) : void {}
    export function setLife(life : number) : void {}
    export function setScore(score : number) : void {}
    export function addScore(score : number) : void {}
    export function startCountdown(time : number) : void {}
    export function score() : number { return score() }
    export function gameOver() : void {}
    export function isPaused() : boolean { return isPaused() }
    export function isRunning() : boolean { return isRunning() }
    export function resume() : void {}
    export function pause() : void {}
}

namespace images {
    class Image {
        showImage(xOffset: number, interval?: number) : void {}
        scrollImage(frameOffset: number, interval: number) : void {}
    }
    export function createImage(leds: string) : Image { return createImage(leds) }
    export function createBigImage(leds: string) : Image { return createBigImage(leds) }
    export function iconImage(Icon: IconNames) : Image { return iconImage(Icon) }
    export function arrowImage(arrow: ArrowNames) : Image { return arrowImage(arrow) }
}

enum LedSpriteProperty {
    X,
    Y,
    Direction,
    Brightness,
    Blink
}

enum RadioPacketProperty {
    SignalStrength = 2,
    Time = 0,
    SerialNumber = 1
}

enum DisplayMode {
    BlackAndWhite,
    Greyscale,
    BackAndWhite
}

 enum AcceleratorRange {
    OneG,
    TwoG,
    FourG,
    EightG
 }

 enum Rotation {
    Pitch,
    Roll
 }

 enum Dimension {
    X,
    Y,
    Z,
    Strength
 }

 enum TouchPin {
    P0,
    P1,
    P2,
 }

 enum Gesture {
    Shake = 11,
    LogoUp = 1,
    LogoDown = 2,
    ScreenUp = 5,
    ScreenDown = 6,  
    TiltLeft = 3,
    TiltRight = 4,  
    FreeFall = 7, 
    ThreeG = 8,
    SixG = 9,  
    EightG = 10,
}


enum ArrowNames {
    North = 0,
    West,
    South,
    East
}

enum IconNames {
    Heart = 0,
    SmallHeart,
    Yes,
    No,
    Happy,
    Sad,
    Confused,
    Angry,
    Asleep,
    Surprised,
    Silly,
    Fabulous,
    Meh,
    TShirt,
    Rollerskate,
    Duck,
    House,
    Tortoise,
    Butterfly,
    StickFigure,
    Ghost,
    Sword,
    Giraffe,
    Skull,
    Umbrella,
    Snake,
    Rabbit,
    Cow,
    QuarterNote,
    EigthNote,
    Pitchfork,
    Target,
    Triangle,
    LeftTriangle,
    Chessboard,
    Diamond,
    SmallDiamond,
    Square,
    SmallSquare,
    Scissors
}

enum Button {
    A,
    B,
    AB
}

enum Direction {
    Right,
    Left
}



export { randint , basic , Button , input , Direction , game , music , led, radio , images}




