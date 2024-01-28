import React, { useRef, useEffect } from 'react'
import EsperimentoPaginazione from './EsperimentoPaginazione'

export default function ColonnaDx({dettaglioJob}) {

 


  return (
     <div className='' style={{ height: "89vh" }} dangerouslySetInnerHTML={{ __html: dettaglioJob }}>
  
   {/*  <EsperimentoPaginazione/> */}
    </div>
  )
}
