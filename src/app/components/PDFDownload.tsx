/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Document, Page, Text, View, Image, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import CatalogGridPDF from './CatalogGridPDF';
import PDFHeader from './PDFHeader';

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
    borderBottomColor: '#E5E7EB',
    borderBottomStyle: 'solid',
    alignItems: 'center',
    minHeight: 80,
    padding: 8,
  },
  cell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
  },
  imageCell: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  nameCell: {
    flex: 2,
    padding: 8,
    fontSize: 10,
  },
  header: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
  },
});

const CatalogPDF = ({ products }: { products: Product[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader />
      <View style={styles.section}>
        <View style={[styles.row, { backgroundColor: '#f3f4f6' }]}>
          <View style={styles.imageCell}></View>
          <Text style={[styles.nameCell, styles.header]}>Name</Text>
          <Text style={[styles.cell, styles.header]}>Unit Size</Text>
          <Text style={[styles.cell, styles.header]}>Case Size</Text>
        </View>
        {products.map((product, index) => (
          <View key={index} style={styles.row}>
            <Image
              style={styles.imageCell}
              src={product.imageUrl}
            />
            <Text style={styles.nameCell}>{product.name}</Text>
            <Text style={styles.cell}>{product.unitSize}</Text>
            <Text style={styles.cell}>{product.caseSize}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const DownloadPDFButton = ({ products }: { products: Product[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<'list' | 'grid'>('list');

  const handleDownload = (selectedLayout: 'list' | 'grid') => {
    setLayout(selectedLayout);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className='w-full py-2 px-4 w-fit text-lg font-semibold bg-[#D32F2F] text-[#FFFFFF] rounded-lg hover:bg-[#B71C1B] transition-colors duration-300 text-center'
      >
        Download Catalog
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <PDFDownloadLink
              document={<CatalogPDF products={products} />}
              fileName="product-catalog-list.pdf"
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
              onClick={() => handleDownload('list')}
            >
              List Layout
            </PDFDownloadLink>
            <PDFDownloadLink
              document={<CatalogGridPDF products={products} />}
              fileName="product-catalog-grid.pdf"
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
              onClick={() => handleDownload('grid')}
            >
              Grid Layout
            </PDFDownloadLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(DownloadPDFButton), {
  ssr: false
});
