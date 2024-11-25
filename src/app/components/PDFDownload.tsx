/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { Document, Page, Text, View, Image, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
// import CatalogGridPDF from './CatalogGridPDF';
import PDFHeader from './PDFHeader';
// const CatalogGridPDF = dynamic(() => import('./CatalogGridPDF'));
// const PDFHeader = dynamic(() => import('./PDFHeader'));
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
    margin: 2,
    padding: 2,
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

const GridStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  section: {
    margin: 4,
    padding: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: 120,
    objectFit: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productInfo: {
    fontSize: 10,
    color: '#4B5563',
    marginBottom: 2,
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

const CatalogGridPDF = ({ products }: { products: Product[] }) => (
  <Document>
    <Page size="A4" style={GridStyles.page}>
      <PDFHeader />
      <View style={GridStyles.section}>
        <View style={GridStyles.gridContainer}>
          {products.map((product, index) => (
            <View key={index} style={GridStyles.gridItem}>
              <Image
                style={GridStyles.image}
                src={product.imageUrl}
              />
              <Text style={GridStyles.productName}>{product.name}</Text>
              <Text style={GridStyles.productInfo}>Unit Size: {product.unitSize}</Text>
              <Text style={GridStyles.productInfo}>Case Size: {product.caseSize}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const DownloadPDFButton = ({ products }: { products: Product[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<'list' | 'grid'>('list');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownload = (selectedLayout: 'list' | 'grid') => {
    setLayout(selectedLayout);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-16">
      <button
        onClick={() => setIsOpen(true)}
        className='w-full py-2 px-4 text-lg font-semibold bg-[#D32F2F] text-[#FFFFFF] rounded-lg hover:bg-[#B71C1B] transition-colors duration-300 text-center'
      >
        Download Catalog
      </button>
      {isOpen && (
        <div ref={menuRef} className="z-10 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <PDFDownloadLink
              document={<CatalogPDF products={products} />}
              fileName="product-catalog-list.pdf"
              className='block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-center'
              // onClick={() => handleDownload('list')}
            >
              List Layout
            </PDFDownloadLink>
            <PDFDownloadLink
              document={<CatalogGridPDF products={products} />}
              fileName="product-catalog-grid.pdf"
              className='block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-primary w-full text-center'
              // onClick={() => handleDownload('grid')}
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
