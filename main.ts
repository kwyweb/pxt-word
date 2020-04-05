//% weight=0 color=#3CB371 icon="\uf36d" block="Word "
namespace word {
    /**
    * Create text content to display on scree.
    */
    //% blockId="createTextSprite" block="Display text of Text %text|font-color %fg|background-color %bg"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function createTextSprite(text: string, fg: number, bg: number){
	const font = image.font8;
	const width = font.charWidth * text.length;
	const height = font.charHeight;
	const res = image.create(width, height);
	res.fill(bg);
	res.print(text, 0, 0, fg, font);
	const sprite = sprites.create(res, SpriteKind.Food);
	return sprite;	
    }
}
