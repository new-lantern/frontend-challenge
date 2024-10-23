import { useState } from 'react';
import {
  MicrophoneIcon,
} from '@heroicons/react/20/solid'

export default function Reporter() {

  const [microphone, setMicrophone] = useState(false);

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-3xl font-semibold leading-7 text-gray-900">Dictate Report</h3>
        <button className={microphone ? "microphone-button-on" : "microphone-button-off"} onClick={() => setMicrophone(!microphone)}>
          <MicrophoneIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
          Microphone {microphone ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  )
}