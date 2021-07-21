let countries = 'Германия, Берлин, 83млн, 357.4тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6тыс.кв.км; Польша, Варшава, 37.9млн, 312.6тыс.кв.км; Франция, Париж, 67.8млн, 643.8тыс.кв.км; Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км; Испания, Мадрид, 44.3млн, 505.9тыс.кв.км; Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км'

function Country(name, capital, population, area){
    this.name = name,
    this.capital = capital,
    this.population = population,
    this.area = area
}

function transformCountries(countries){
    countries = countries.replaceAll(' ', '').replaceAll('млн', '').replaceAll('тыс.кв.км', '')
    countries = countries.split(';')
    return countries.map(country => new Country(...country.split(',')))
}

countries = transformCountries(countries)

const longLends = new Country('Лонг Лендс',
                        countries[1].capital,
                        countries.reduce(((acc, curV) => acc + Number(curV.population)), 0) + 'млн.',
                        countries.reduce(((acc, curV) => acc + Number(curV.area)), 0) + 'тыс.кв.км.',
)

longLends.provinces = countries

document.body.innerHTML += `<div>` + `${longLends.name}:<br>` + `Столица: ${longLends.capital}<br>` + `Население: ${longLends.population}<br>` + `Площадь: ${longLends.area}` + `</div>`
                           
                            