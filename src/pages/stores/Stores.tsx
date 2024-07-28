import Banner from '@/components/Banner/Banner'
import ListStore from '@/components/Store/ListStore'
import React from 'react'

const Stores = () => {
  return (
    <div className='bg-secondary-200 w-full'>
        <Banner name="Cửa Hàng" imgUrl="https://s3-alpha-sig.figma.com/img/0d70/b20b/6ffe9068ba7aa764bbe1fd503be7c54b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qLsCDUMSArbRt7xPtrCsPOKy7tf09trVoa5Bw6Rm5Pzs4rYrV-KQ4Ss2RW1fBCg7PCRsAlVHiooC0yvh2kc-K7cjucgGLHyfjvp-9P08QIKGV63P3rIgAXjndayPNbxWX6abgQxvhWNUzcHGrGhlpaXEhMo~Gl2rFxxIoUcd9dzt8ZYtxcRGlLJcWRboM76N6qJdvV1fVdoyGCND7N8Q3I5RwqSOtOZIQ8IJQjJV1KIbXOpod70nR4FDsWts87p-u-JIk2iceP0ySxHhou79ZnHPKFRmWvMHkUH7kseuXTv5QoutZpbj9TP2o-PPJ3I94b71VyaucGC-aOdqsr-nNQ__"/>
        <ListStore />
    </div>
  )
}

export default Stores