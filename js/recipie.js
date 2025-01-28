var Recipies = [
    {
        title: "Snacks", subtitle: "Buscuit recipe", type: "Buscuits", picture: "cookie.jpg",
        ingredients: ["300g golden caster sugar", "225g butter at room temperature",
            "300g plain flour sifted", "8eggs, beaten", "4tbsp baking powder", "4tbsp whole milk"],
 method: ["Preheat overn to 180C/160 fan/ gas 4 and grease and line 4*20cm cake tins",
            "Put the sugar,buter and vaniall paste in a large bowl and beat with an electric whisk",
            "Sift the flour and backing powder with a tsp of salt and fold into cake batter",
            "make the icying by beaten butter wuth half of the icing sugar until combined and fluffy",
            "When cake has cooled put a blob of icying onto the cake boarf and sit 1 sponges on top",
            "Serve the slices"]


    },
    {
     title: "Snacks", subtitle: " cake recipe", type: "funfetticake", picture: "cake.jpg",
        ingredients: ["300g golden caster sugar", "225g butter at room temperature",
            "300g plain flour sifted", "8eggs, beaten", "4tbsp baking powder", "4tbsp whole milk"],
 method: ["Preheat overn to 180C/160 fan/ gas 4 and grease and line 4*20cm cake tins",
            "Put the sugar,buter and vaniall paste in a large bowl and beat with an electric whisk",
            "Sift the love and backing powder with a tsp of salt and fold into cake batter",
            "make the icying by beaten butter wuth half of the icing sugar until combined and fluffy",
            "When cake has cooled put a blob of icying onto the cake boarf and sit 1 sponges on top",
            "Serve the slices"]


    }
        
    
]

const num = localStorage.getItem('id')
let selected = Recipies[Number(num)];

var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');
var type = document.getElementById('type');
var picture = document.getElementById('picture');
var ingredients = document.getElementById('ingredients');
var method = document.getElementById('methods');

title.innerHTML = selected.title;
subtitle.innerHTML = selected.subtitle;
type.innerHTML = selected.type;
picture.setAttribute('src',selected.picture);

for(let i=0;i<selected.ingredients.length;i++){
    let listelem = document.createElement('li')
    listelem.classList.add('list-group-item');
    listelem.innerHTML = selected.ingredients[i];
    ingredients.appendChild(listelem);

}
for(let i=0;i<selected.method.length;i++){
    let listelem = document.createElement('li')
    listelem.classList.add('list-group-item');
    listelem.innerHTML = selected.method[i];
    method.appendChild(listelem);
    
}