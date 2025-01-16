

import './App.css'
import ShadowButton from './components/Shadow/ShadowButton'
import ShadowCard from './components/Shadow/ShadowCard'
import ShadowCheckbox from './components/Shadow/ShadowCheckbox'
import ShadowInput from './components/Shadow/ShadowInput'
import ShadowProgress from './components/Shadow/ShadowProgress'
import ShadowSkeleton from './components/Shadow/ShadowSkeleton'
import ShadowSlider from './components/Shadow/ShadowSlider'
import ShadowSwitch from './components/Shadow/ShadowSwitch'
import ShadowTabs from './components/Shadow/ShadowTabs'
import ShadowTextArea from './components/Shadow/ShadowTextArea'

function App() {


  return (
    <div className='flex p-5 flex-col w-full min-h-full'>
      <h1 className='text-center font-extrabold text-3xl'>Welcome to ShadowCN</h1>

      <div className='w-full h-full px-6 pt-10  pb-2 flex flex-wrap gap-6 items-center justify-between'>


        {/* Components to create*/ }

        {/* 1. Card */ }
        <ShadowCard />
        {/*   2. Switch */ }
        <ShadowSwitch />
        {/*   3. progress bar  */ }
        <ShadowProgress progress={ 50 } />
        {/*   4. Input */ }
        <ShadowInput />
        {/*   5. Skeleton */ }
        <ShadowSkeleton />
        {/*   6. checkbox */ }
        <ShadowCheckbox />
        {/*   7. tabs */ }
        <ShadowTabs />
        {/*   8. button */ }
        <ShadowButton Text='Button' />
        {/*   9. slider */ }
        <ShadowSlider />
        {/*  10. Text Area */ }
        <ShadowTextArea />

      </div>
    </div>
  )
}

export default App
