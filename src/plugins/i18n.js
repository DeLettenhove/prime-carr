import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from '../translations/index'

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  ns: ['translations'],
})

i18n.languages = ['en', 'ua']

export default i18n
