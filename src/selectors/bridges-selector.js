import {
  ALPHABETICAL_ASC,
  ALPHABETICAL_DESC,
  NEWEST,
  OLDEST
} from '../constants/sort-options';

export const filterByName = (bridges, name) => {
  return bridges.filter(bridge => {
    if(name){
      return bridge.name.toLowerCase().includes(name)
    } else {
      return bridges;
    }
  });
}

export const filterByCountry = (bridges, country) => {
  if(country && country !== 'All') {
    return bridges.filter(bridge => 
      bridge.country.includes(country)
    )
  } else {
    return bridges;
  }
}

export const sortByParam = (bridges, param) => {
  switch(param){
    case ALPHABETICAL_ASC:
      return sortAlphabeticaly(bridges);
    case ALPHABETICAL_DESC:
      return sortAlphabeticaly(bridges).reverse();
    case NEWEST:
      return sortByYear(bridges).reverse();
    case OLDEST:
      return sortByYear(bridges);
    default:
      return bridges;
  }
}

const sortAlphabeticaly = bridges => {
  return bridges.sort((a, b) => {
    if(a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  })
}

const sortByYear = bridges => {
  return bridges.sort((a, b) => {
    if(a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return 0;
    }
  })
}