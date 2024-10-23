import {
  ClipboardDocumentListIcon,
} from '@heroicons/react/20/solid'

const cases = [
  {
    name: 'MAMMOGRAM BILATERAL DIGITAL SCREENING',
    patient: 'Karla Mckinney',
    accession: '22912576',
  },
  {
    name: 'MRI SHOULDER LT WITHOUT CONTRAST',
    patient: 'Chris Walter',
    accession: '27058076',
  },
  {
    name: '	MRI CERVICAL SPINE WITHOUT CONTRAST',
    patient: 'Evan Baxter',
    accession: '29914225',
  },
  {
    name: 'CT ABDOMEN AND PELVIS WITH CONTRAST',
    patient: 'Dexter Patton',
    accession: '28104586',
  },
  {
    name: 'CT CHEST WITHOUT CONTRAST',
    patient: 'Miguel Pruitt',
    accession: '20173012',
  },
  {
    name: 'Tom Cook',
    patient: 'Hosea Noble',
    accession: '29165019',
  },
]

export default function Worklist() {
  return (
    <div>
      <span className="microphone-badge-off">
        Microphone Off
      </span>
      <ul className="divide-y divide-gray-100">
      {cases.map((person) => (
        <li key={person.patient} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <ClipboardDocumentListIcon aria-hidden="true" className="h-12 w-12 flex-none text-gray-300" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.patient}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.accession}</p>
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">Ready</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}