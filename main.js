async function ace(){
        const response =  await fetch("https://newsdata.io/api/1/news?apikey=pub_670829fde235f39feb00253ef8a5619e29b6e&country=mk&language=mk");
        const body = document.getElementsByTagName("body")[0];
        let out = response.json().then(value=>{
            const container = document.createElement("div");
            container.setAttribute("class", "container text-center");
            body.appendChild(container);
            for(let i = 0; i < value.results.length; i+=4){
                const row = document.createElement("div");
                row.setAttribute("class", "row");                   
                for(let j = 0; j < 4 && i + j < value.results.length; j++){
                    const col = document.createElement("div");
                    col.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 mb-4");                    
                    let result = value.results[i + j];
                    const card = document.createElement("div");
                    card.setAttribute("class", "card text-bg-primary mb-3");
                    const img = document.createElement("img");
                    img.setAttribute("src", result.image_url);
                    img.setAttribute("width", "100");
                    img.setAttribute("class", "card-img-top");
                    img.setAttribute("alt", "News Image");
                    col.appendChild(img);
                    const cardBody = document.createElement("div");
                    cardBody.setAttribute("class", "card-body");
                    const title = document.createTextNode(result.title);
                    const h1 = document.createElement("h5");
                    h1.setAttribute("class", "card-title");
                    h1.appendChild(title);
                    cardBody.appendChild(h1);
                    const description = document.createTextNode(result.description);
                    const p = document.createElement("p");
                    p.setAttribute("class", "card-text");
                    p.appendChild(description);
                    cardBody.appendChild(p);
                    card.appendChild(cardBody);
                    col.appendChild(card);
                    row.appendChild(col);
                }
                container.appendChild(row);
            }
        });
        }