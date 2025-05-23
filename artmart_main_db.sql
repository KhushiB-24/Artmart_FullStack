-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 02:09 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `artmart_main_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`id`, `email`, `name`, `password`, `phone`) VALUES
(1, 'shubhamshahare123@gmail.com', 'Shubham Shahare', 'Shubh@123', '8698154885'),
(2, 'tanuthakur123@gmail.com', 'Tanu Thakur', 'Tanu@123', '5794865866'),
(53, 'agasheprachi33@gmail.com', 'Prachi Agashe', 'Prachi@123', '7473272636'),
(104, 'khushibambodkar2404@gmail.com', 'Khushi Nitesh Bambodkar', 'Khusi234', '7397951576');

-- --------------------------------------------------------

--
-- Table structure for table `buyer_seq`
--

CREATE TABLE `buyer_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer_seq`
--

INSERT INTO `buyer_seq` (`next_val`) VALUES
(201);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `seller_email` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category`, `description`, `imgurl`, `price`, `status`, `title`, `seller_email`, `style`) VALUES
(1, 'Abstract', 'This stunning acrylic painting captures the serene expression of Lord Buddha through vibrant, abstract color blending.', 'http://localhost:8080/products/download/1744205845360_Product9.jpg', 450, 'Available', ' Inner Peace', 'aishwaryawanjari123@gmail.com', NULL),
(2, 'Sketch', 'This exquisite black-and-white ink illustration captures the timeless beauty and elegance of a traditional Indian woman amidst blooming lotus flowers.', 'http://localhost:8080/products/download/1744205896668_Product1.jpg', 500, 'Unavailable', 'Divine Grace in Ink', 'aishwaryawanjari123@gmail.com', NULL),
(5, 'Sketch', 'Echo Chamber is a hauntingly surreal graphite artwork that delves deep into the themes of inner turmoil, psychological loops', 'http://localhost:8080/products/download/1744206171160_Product7.jpg', 650, 'Available', 'Echo Chamber', 'khushibambodkar2404@gmail.com', NULL),
(6, 'Canvas', 'Bursting with color and elegance, Majestic Grace captures the regal beauty of a peacock in all its glory. ', 'http://localhost:8080/products/download/1744206235881_Product10.jpg', 700, 'Available', 'Majestic Grace', 'khushibambodkar2404@gmail.com', NULL),
(7, 'Abstract', 'A bold and contemporary reinterpretation of Leonardo da Vinci\'s iconic Mona Lisa, this artwork fuses classic portraiture with modern cubism.', 'http://localhost:8080/products/download/1744206301663_Product3.jpg', 1500, 'Available', ' Mona Reimagined : Cubist Muse', 'khushibambodkar2404@gmail.com', NULL),
(52, 'Caricature', 'Nervous Wreck is a raw, exaggerated pencil sketch that captures the comically intense expression of anxiety and dread. ', 'http://localhost:8080/products/download/1745234528293_Product18.jpg', 875, 'Unavailable', 'Fun', 'khushibambodkar2404@gmail.com', NULL),
(53, 'Abstract', 'Whispers in the Hills is a round canvas painting that blends abstract and impressionistic styles to capture the serene rhythm of nature.', 'http://localhost:8080/products/download/1745235770545_Product16.jpg', 450, 'Available', 'Whispers in the Hills', 'khushibambodkar2404@gmail.com', NULL),
(55, 'Caricature', 'Atomic Chuckle is a satirical caricature that exaggerates the features and personality of a well-known political figure', 'http://localhost:8080/products/download/1745237571814_Product19.jpg', 500, 'Available', 'Atomic Chuckle', 'aishwaryawanjari123@gmail.com', NULL),
(56, 'Abstract', 'Silent Embrace is a striking abstract artwork that portrays the quiet intimacy and emotional depth of a shared moment between two figures.', 'http://localhost:8080/products/download/1745237652116_Product13.jpg', 856, 'Available', 'Silent Embrace', 'aishwaryawanjari123@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_seq`
--

CREATE TABLE `product_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_seq`
--

INSERT INTO `product_seq` (`next_val`) VALUES
(451);

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`id`, `email`, `name`, `password`, `phone`) VALUES
(1, 'khushibambodkar2404@gmail.com', 'Khushi Nitesh Bambodkar', 'Khushi@123', '7397951576'),
(2, 'aishwaryawanjari123@gmail.com', 'Aishwarya Wanjari', 'Aish@123', '7666402429');

-- --------------------------------------------------------

--
-- Table structure for table `seller_seq`
--

CREATE TABLE `seller_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller_seq`
--

INSERT INTO `seller_seq` (`next_val`) VALUES
(101);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
