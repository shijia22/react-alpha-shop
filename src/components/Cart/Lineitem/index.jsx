import { React } from 'react';

const LineItem = () => {
  const products = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ];

  const list = []

  for (const [i, product] of products.entries()) {
    list.push(<div className="mb-8 flex justify-between">
      <img alt="" src={product.img} className='w-[100px] h-[100px]' />
      <div className="items-center min-w-[100px]">
        <span>{product.name}</span>
        <div className="flex justify-between mt-4">
          <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]">-</button>
          <span>{product.quantity}</span>
          <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]">+</button>
        </div>
      </div >
      <div>$ {product.price}</div>
    </div>)
  }

  return (
    <>
      {list}
    </>
  )
}

export default LineItem;
