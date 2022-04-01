import Text from './components/Text/Text'
import CustomHeader from './components/CustomHeader/CustomHeader'
import Navbar from './components/Navbar/index'
import Button from './components/Button/index'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/CheckBox/index'
import GeneralInputs from './components/GeneralInputs/index'
import DropDown from './components/DropDown/index'
import {
  withComponentMappingContext,
  MapTo
} from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('vue/components/text')(Text)

MapTo('vue/components/custom-header')(CustomHeader)

MapTo('vue/components/button')(Button)

MapTo('vue/components/navbar')(Navbar)

MapTo('vue/components/input-checkbox')(CheckBox)

MapTo('vue/components/dropdown')(DropDown)

MapTo('vue/components/general-inputs')(GeneralInputs)

// AppPage Mapping
MapTo('vue/components/page')(withComponentMappingContext(AppPage))