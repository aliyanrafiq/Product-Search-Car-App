var cars = {
    honda: {
        civic: {
            type: {
                name: 'Honda Civic Reborn',
                model: 2020,
                gates: 4,
                wheels: 4,
                price: 6000000,
                image: "https://www.cnet.com/a/img/resize/7876dbb5d916180072c8d8e0a4ae8a9f3d303c3d/hub/2021/06/25/7ce0f6be-f64a-4815-8573-c341070a9f40/ogi1-2022-honda-civic-sport-sedan-007.jpg?auto=webp&fit=crop&height=675&width=1200"
            }
        },
        city: {
            type: {
                name: 'Honda City',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://dnd.com.pk/wp-content/uploads/2023/08/2023-Honda-City-facelift-Malaysia-bookings-open-1-1200x686-1.webp"
            }
        },
        crv: {
            type: {
                name: 'Honda Cr V',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://i.ytimg.com/vi/2MaXSjd5peU/maxresdefault.jpg"
            }
        },
        hrv: {
            type: {
                name: 'Honda Hr-V',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://images.wapcar.my/file/27a10212467e4c2f962389e47aa50606.jpg"
            }
        },
        accord: {
            type: {
                name: 'Honda Accord',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://cdn.motor1.com/images/mgl/0e4v8n/s3/2022-honda-accord-sport-exterior.webp"
            }
        },
    },
    toyota: {
        corollo: {
            type: {
                name: 'Toyota Corolla XLI',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://global.toyota/pages/news/images/2019/09/17/1300/20190917_02_02_s.jpg"
            }
        },
        camry: {
            type: {
                name: 'Toyota Camry',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://media.ed.edmunds-media.com/toyota/camry/2024/oem/2024_toyota_camry_sedan_se-nightshade-edition_fq_oem_1_1280.jpg"
            }
        },
        prius: {
            type: {
                name: 'Toyota Prius',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://scene7.toyota.eu/is/image/toyotaeurope/prius-coloured-background-prius-cars-1920x1080?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0"
            }
        },
        yaris: {
            type: {
                name: 'Toyota Yaris',
                model: 2022,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://cdn.bolnews.com/wp-content/uploads/2023/07/FotoJet-2023-07-07T000645.793.jpg"
            }
        },
        supra: {
            type: {
                name: 'Toyota Supra',
                model: 2002,
                gates: 4,
                wheels: 4,
                price: 3000000,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2023_Toyota_Supra_%282%29.jpg/640px-2023_Toyota_Supra_%282%29.jpg"
            }
        }
    },
    audi: {
        audiA4: {
            type: {
                name: 'Audi A4',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/03/audiuk0002285520audi20a420avant.jpg"
            }
        },
        audiA3: {
            type: {
                name: 'Audi A3',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://editorial.pxcrush.net/carsales/general/editorial/2022-audi-a3-sedan-hatch-6.jpg?width=1024&height=683"
            }
        },
        audiR8: {
            type: {
                name: 'Audi R8',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://cdn.motor1.com/images/mgl/vxoJ0Y/s1/2023-audi-r8-v10-gt-rwd.jpg"
            }
        }
    },
    nissan: {
        altima: {
            type: {
                name: 'Nissan Altima',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4Wdwaxx97J6JivfK63upCl-OKLdbYUbK3l7SrlAYjChhLszde"
            }
        },
    },
    mercedes: {
        benz: {
            type: {
                name: 'Mercedes-Benz',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-G-63/9737/1679289361128/front-left-side-47.jpg"
            }
        },
    },
    ford: {
        mustang: {
            type: {
                name: 'Ford Mustang',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://media.ed.edmunds-media.com/ford/mustang/2024/oem/2024_ford_mustang_coupe_dark-horse_fq_oem_1_1280.jpg"
            }
        },
        fiesta: {
            type: {
                name: 'Ford Fiesta',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://edgecast-img.yahoo.net/mysterio/api/1CB6E1D4B5DD2D9B48B05298030EB9425F2C13C498588119581F24AF25CA1E07/autoblog/resizefill_w640_h400;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC70FOC221A021001.jpg"
            }
        },
        modelT: {
            type: {
                name: 'Ford Model T',
                model: 2021,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://www.dispatch.com/gcdn/authoring/2019/03/18/NCOD/ghows-OH-845fb97c-a70e-0f48-e053-0100007f64ee-5e4df9ec.jpeg?crop=1731,979,x0,y97&width=1600&height=800&format=pjpg&auto=webp"
            }
        },
    },
    jaguar: {
        fType: {
            type: {
                name: 'Jaguar F-Type',
                model: 2020,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://hips.hearstapps.com/hmg-prod/images/636755565020446308fv-1577742597.jpg?crop=0.708xw:0.630xh;0.292xw,0.194xh&resize=1200:*"
            }
        },
    },
    kia: {
        sportage: {
            type: {
                name: 'KIA Sportage',
                model: 2020,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://cdn.bolnews.com/wp-content/uploads/2023/08/FotoJet-1-72-105.jpg"
            }
        },
        sorento: {
            type: {
                name: 'KIA Sorento',
                model: 2020,
                gates: 4,
                wheels: 4,
                price: 2500000,
                image: "https://mediacloud.carbuyer.co.uk/image/private/s--IoajB9L5--/v1686919533/autoexpress/2023/06/Kia%20Sorento%20Edition%202023%20UK-10.jpg"
            }
        },
    },
}



var company = document.getElementById('company')
var brand = document.getElementById('brands')
company.innerHTML = `<option value="">Select Company</option>`
brand.innerHTML = `<option value="">Select Company</option>`
var allCars = document.getElementById("allCars")



for (var key in cars) {
    company.innerHTML += `
    <option value = '${key}'>${key.toUpperCase()}</option>
    `
    for (var key1 in cars[key]) {
        for (var key2 in cars[key][key1]) {

            console.log(cars[key][key1][key2])
            allCars.innerHTML += `<div class="card"">
                <div class = "col mb-2">
                <div class = "card">
                <img src = "${cars[key][key1][key2].image}" class = "card-image-top alt = "">
                    <div class="card-body">
                        <h5 class="card-title">${cars[key][key1][key2].name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${cars[key][key1][key2].model}</h6>
                        <h3>Rs ${cars[key][key1][key2].price}</h3>
                    </div>
                </div>`
        }
    }

}



function onCompanyChange() {
    brand.innerHTML = ""
    for (var key in cars[company.value]) {
        brand.innerHTML += `
    <option value = '${key}'>${key.toUpperCase()}</option>
        
        `
    }
}


function filterCars() {
    allCars.innerHTML = ""
    var carData = cars[company.value][brand.value].type
    var btn = document.getElementById("btn")
    console.log("chal raha hai")
    allCars.innerHTML += `
    <div class = "col mb-2">
       <div id = "single-car" class = "card">
          <img src ="${carData.image}" class = "card-img" alt = "..." style='height: 200px; object-fit: cover; '>
          <div class = "card-body">
             <h5 class = 'card-title'>${carData.name}></h5>
             <h6 class = 'card-title'>${carData.model}></h6>
             <h2>Rs ${cars[key][key1][key2].price}
          </div>
       </div>
    </div>`

}
