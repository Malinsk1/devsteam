import Image from 'next/image'
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, discountPrice }) {
  return(
    <> 
    <div className={styles.salecard}>
      <Image src={`/products/${image}`} width={250} height={300} alt={`produto ${image}`}/>
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta Exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>-{discount}</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R${fullPrice}</p>
            <h4 className={styles.discountprice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button fullwidth>Adicionar ao carrinho</Button>
      </div>
    </div>
    </>
  )
}

SaleCard.defaultProps = {
  image: 'league-of-legends.jpg',
  discount: '90%',
  fullPrice: '199,90',
  discountPrice: '19,90'
}