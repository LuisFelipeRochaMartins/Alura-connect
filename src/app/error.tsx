'use client' 

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import style from './error/error.module.css'
import banner from './error/500.png'

export default function Error({error}: {error: Error & { digest?: string }}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className={style.main}>
      <Image src={banner} alt='Imagem de Erro comum'/>
      <h2 className={style.text}>Opa! Um erro ocorreu.</h2>
      <h3 className={style.subtext}>Não conseguimos carregar a página, volte para seguir navegando</h3>
      <div className={style.link}>
        <Link  href={'/'}>Voltar para o Feed</Link>
        <ArrowLeft color='#132E35'/>
      </div>
    </main>
  )
}