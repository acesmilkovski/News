async function ace(){
        const response =  await fetch("https://newsdata.io/api/1/news?apikey=pub_670829fde235f39feb00253ef8a5619e29b6e&country=mk&language=mk");
        const body = document.getElementsByTagName("main")[0];
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
                    card.appendChild(img);
                    const cardBody = document.createElement("div");
                    cardBody.setAttribute("class", "card-body");
                    const title = document.createTextNode(result.title);
                    const h1 = document.createElement("h5");
                    h1.setAttribute("class", "card-title");
                    h1.appendChild(title);
                    cardBody.appendChild(h1);
                    const description = result.description;
                    let descriptionWhole;
                    let description1;
                    let description2 = "";
                    if(description.length > 50){
                        description1 = document.createTextNode(description.substring(0, 50));
                        description2 = document.createTextNode(description.substring(50));
                        const firstPart = document.createElement("span");
                        firstPart.setAttribute("class", "first-part");
                        firstPart.appendChild(description1);
                        const secondPart = document.createElement("div");
                        secondPart.setAttribute("class", "second-part");
                        secondPart.appendChild(description2);
                        secondPart.setAttribute("class", "collapse");
                        secondPart.setAttribute("id", `description-${i + j}`);
                        const readMore = document.createElement("button");
                        readMore.setAttribute("class", "btn btn-success read-more");
                        readMore.textContent = "Повеќе";
                        readMore.setAttribute("type", "button");
                        readMore.setAttribute("data-bs-toggle", "collapse");
                        readMore.setAttribute("data-bs-target", `#description-${i + j}`);
                        readMore.setAttribute("aria-expanded", "false");
                        readMore.setAttribute("aria-controls", `description-${i + j}`);
                        descriptionWhole = document.createElement("div");
                        descriptionWhole.appendChild(firstPart);
                        descriptionWhole.appendChild(secondPart);
                        descriptionWhole.appendChild(readMore);
                    }else{
                        description1 = document.createTextNode(description);
                        descriptionWhole = document.createTextNode(description1);
                    }
                    const p = document.createElement("p");
                    p.setAttribute("class", "card-text");
                    p.appendChild(descriptionWhole);
                    cardBody.appendChild(p);
                    card.appendChild(cardBody);
                    col.appendChild(card);
                    row.appendChild(col);
                }
                container.appendChild(row);
            }
        });
        }