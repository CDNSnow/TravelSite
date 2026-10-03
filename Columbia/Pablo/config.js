 var header = "Pablo";
var links = ["Medellin", "Pablo Escobar", "Coffee Plantation", "Guatape and El Pinol"];
var hrefs = ["medellin/index.html", "pablo/index.html", "coffee/index.html", "pinol/index.html"];
var texts = new Array();
texts[0] = "Pablo Escobar came from a long line of criminals. His great-grandfather was a slave trader.  His father left shortly after Pablo\’s birth, \
leaving his schoolteacher mother to support a family on a trivial income. Pablo got his start stealing cars. \
He kept a spare key so he could steal it back from its purchaser and resell it. He also ground inscriptions off tombstones and sold those, as well as \
fake lottery tickets.";
Texts[1] = "80% of the cops were on his payroll; he'd killed 2,800 others who chose plombo over plata. His informants ranged from street kids to politicians to the phone company. \
Nothing in Medellin moved without his knowledge. This cop car shows bullet holes.";
Texts[2] = "He built a soccer field, streetlights, and housing for his hilltop slum (communa)."
Texts[3] = "They worship him to this day. It bought him much popular support, which he needed later on. If he'd kept doing this, he might have been undefeatable (credit: The City Lane."
texts[4] =  "He impulsively bought boats, 9 buildings, a personal zoo, a solid gold bicycle (pictured) \
\n for his favorite competitor, and a Caribbean island for transshipment. He always carried a $500 bill in his pocket for emergencies."
texts[3]= "He built hundreds of homes for his barrio, put in streetlights, built a soccor field and a swimming pool. In return, the whole barrio of criminals \
\n became his sicarios (assassins). "
texts[4]= "He died on the rooftop on December 2, 1993, unfulfilled. Unlike every other drug lord I know, money was secondary. Having started as a nothing in a slum, Pablo was on a life-long \
\n quest for respect. He'd wanted to be the president of Colombia. He'd arranged to be elected to the Chamber of Representatives, but failed to become President." 
var pictures = ["child.jpg", "copcar.jpg", "barrio;jpg", "communa.jpg", "cycle.jpg", "death.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
var maxWidth = 0;
var image = new Image();
for (picture in pictures) {
    image.src = picture;
    if (image.naturalWidth > maxWidth) {
        maxWidth = image.naturalWidth;
    }
}
var currentPic = 0;