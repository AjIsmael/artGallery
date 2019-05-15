let defaultUrl = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
class Classic {
  constructor(art_url = defaultUrl){
    this.frame = 'black'
    this.art_url = art_url
  }

  render(){
    let border = "border: 10px solid" + this.frame
    let newImage = document.createElement('IMG')
    newImage.setAttribute("src", this.art_url);
    newImage.setAttribute("width", "300");
    newImage.setAttribute("height", "300");
    newImage.setAttribute("style", `border: 10px solid ${this.frame}` );
    document.body.appendChild(newImage);

  }
}

class Meme extends Classic {
  constructor(art_url){
    super(art_url)
    this.frame = 'red'
  }
}
var art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render()

var meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
meme1.render()
