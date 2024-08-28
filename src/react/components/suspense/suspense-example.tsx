import React, { Suspense, useDeferredValue, useMemo, useState } from 'react'
import { SuspenseChildren } from './suspense-children'

export const SuspenseExample = () => {
  const [query, setQuery] = useState()
  const deferredQuery = useDeferredValue(query)

  // const querySection = useMemo(() => <SuspenseChildren query={deferredQuery} />, [deferredQuery])

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색" />
      {/*<Suspense fallback={<h1>Loading ...</h1>}>{querySection}</Suspense>*/}
      <Suspense fallback={<h1>Loading ...</h1>}>{<SuspenseChildren query={deferredQuery} />}</Suspense>
    </div>
  )
}
