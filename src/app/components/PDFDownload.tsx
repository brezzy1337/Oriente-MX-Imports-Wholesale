/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import dynamic from 'next/dynamic';
import { Document, Page, Text, View, Image, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unitSize: string;
  caseSize: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    alignItems: 'center',
    height: 50,
    padding: 5,
  },
  cell: {
    flex: 1,
    padding: 5,
  },
  nameCell: {
    flex: 2,
    padding: 5,
    width: "auto"
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const CatalogPDF = ({ products }: { products: Product[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={[styles.row, { backgroundColor: '#f3f4f6' }]}>
          <Text style={[styles.cell, styles.header]}></Text>
          <Text style={[styles.cell, styles.header]}>Name</Text>
          <Text style={[styles.cell, styles.header]}>Unit Size</Text>
          <Text style={[styles.cell, styles.header]}>Case Size</Text>
        </View>
        {products.map((product, index) => (
          <View key={index} style={styles.row}>

            {/* <Image style={styles.cell} src={product.imageUrl} alt={`Product: ${product.name}`} /> */}
            <Image style={styles.cell} src={product.imageUrl} />
            <Text style={styles.cell}>{product.name}</Text>
            <Text style={styles.cell}>{product.unitSize}</Text>
            <Text style={styles.cell}>{product.caseSize}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const DownloadPDFButton = ({ products }: { products: Product[] }) => {
  return (

      <PDFDownloadLink
        document={<CatalogPDF products={products} />}
        fileName="product-catalog.pdf"
        className='w-full py-2 px-4 w-fit text-lg font-semibold bg-[#D32F2F] text-[#FFFFFF] rounded-lg hover:bg-[#B71C1B] transition-colors duration-300 text-center'
      >
        Download Catalog
        {/* {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF Catalog')} */}
      </PDFDownloadLink>
  );
};

export default dynamic(() => Promise.resolve(DownloadPDFButton), {
  ssr: false
});
