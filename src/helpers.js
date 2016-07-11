import { toSentenceSerial } from 'underscore.string'

// retuns zero padded YYYY-MM-DD given a date object
export function formatDate(date) {
  let dd = date.getDate().toString()
  let mm = (date.getMonth() + 1).toString()
  let yyyy = date.getFullYear().toString()

  if (dd.length === 1) {
    dd = '0' + dd
  }

  if (mm.length === 1) {
    mm = '0' + mm
  }

  return `${yyyy}-${mm}-${dd}`
}

export function informalName(person) {
  return person.firstName + (person.suffix ? ` ${person.suffix}` : '')
}

// given an array of people-like objects, return e.g. "Bob, Joe, and Joe Jr."
export function informalList(people,
                             delimiter = ', ',
                             lastDelimiter = ' and ') {

  const names = people.map(person => informalName(person))
  return toSentenceSerial(names, delimiter, lastDelimiter)
}

export function incomeTypeIsValid(incomeType, mustNotBeNull = []) {
  switch(incomeType.isApplicable) {
    case true:
      if (mustNotBeNull.map(name => incomeType[name] == null)
                       .reduce((a, b) => a || b, false)) {
        return false
      }
      let incomeSources = []
      for (let name in incomeType.sources) {
        incomeSources.push(incomeType.sources[name])
      }
      return incomeSources
        .map(incomeSource => { return(
          incomeSource.has === false ||
          !!(incomeSource.has && incomeSource.amount && incomeSource.frequency)
        )})
        .reduce((a, b) => a && b, true)
      break
    case false:
      return true
      break
    default:
      return false
  }
}

export function allStudentsAreFHMR(students) {
  const qualifyingAttributes = [
    'isFoster',
    'isHomeless',
    'isMigrant',
    'isRunaway'
  ]

  return students
    .map(student => {
      return qualifyingAttributes
        .map(attr => student[attr] === true)
        .reduce((a, b) => a || b, false)
    })
    .reduce((a, b) => a && b, true)
}
