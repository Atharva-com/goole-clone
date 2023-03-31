
import SearchHeader from '@/components/SearchHeader'
import './../globals.css'

export const metadata = {
  title: 'Google-Clone',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
      <div>
        <SearchHeader />
        {children}
      </div>
  )
}