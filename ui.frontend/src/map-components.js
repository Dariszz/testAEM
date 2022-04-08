import Text from './components/Text/Text'
import Empty from './components/Empty/index'
import Navbar from './components/Navbar/index'
import Button from './components/Button/index'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/CheckBox/index'
import GeneralInputs from './components/GeneralInputs/index'
import GeneralText from './components/GeneralText/index'
import DropDown from './components/DropDown/index'
import Header from './components/Header/index'
import {
  withComponentMappingContext,
  MapTo
} from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('vue/components/text')(Text)

MapTo('vue/components/empty')(Empty)

MapTo('vue/components/button')(Button)

MapTo('vue/components/navbar')(Navbar)

MapTo('vue/components/header')(Header)

MapTo('vue/components/input-checkbox')(CheckBox)

MapTo('vue/components/dropdown')(DropDown)

MapTo('vue/components/general-inputs')(GeneralInputs)

MapTo('vue/components/general-text')(GeneralText)

// AppPage Mapping
MapTo('vue/components/page')(withComponentMappingContext(AppPage))
