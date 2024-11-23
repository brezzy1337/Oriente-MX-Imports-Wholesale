'use client';

import dynamic from 'next/dynamic';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

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
          <Text style={[styles.cell, styles.header]}>Name</Text>
          <Text style={[styles.cell, styles.header]}>Unit Size</Text>
          <Text style={[styles.cell, styles.header]}>Case Size</Text>
        </View>
        {products.map((product, index) => (
          <View key={index} style={styles.row}>
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
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {({ loading }) => (
        <>
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download PDF Catalog
            </>
          )}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default dynamic(() => Promise.resolve(DownloadPDFButton), {
  ssr: false
});
