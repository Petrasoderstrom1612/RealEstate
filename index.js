import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"
import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"

function getPropertyHtml(arr=[placeholderPropertyObj]) { //important to convert the obj into an array of objects
    let propertiesToShow = ""
     arr.map((oneProperty) =>{
        const {image,propertyLocation,priceGBP,comment,roomsM2} = oneProperty 
        console.log(oneProperty)
        propertiesToShow+= `<section class="card">
        <img src="/img/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${roomsM2.reduce((total,currentElement)=>total+currentElement,0)} m&sup2;</h3>
        </div>
    </section> `
    })
    return propertiesToShow
    }
    
    document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr) //if you forget this argument, the default will display



/*    The other possible way how to do instead

import propertyForSaleArr from '/properties/propertyForSaleArr' ..if you do export default at the end of each data.js file
import placeholderPropertyObj from '/properties/placeholderPropertyObj'

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {                                       ...you do not store it in a variable but map straight a way creating a string divided by kommas
        const {propertyLocation,priceGBP,roomsM2,comment,image} = property
        return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${roomsM2.reduce((total, current) => total + current)} m&sup2;</h3>
                </div>
            </section>` 
    }).join('')
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr) */