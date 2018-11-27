-- phpMyAdmin SQL Dump
-- version 4.2.12
-- http://www.phpmyadmin.net
--
-- Host: rdbms
-- Generation Time: Jul 24, 2018 at 06:05 PM
-- Server version: 5.6.40-log
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `DB1691543`
--

-- --------------------------------------------------------

--
-- Table structure for table `trials`
--

CREATE TABLE IF NOT EXISTS `trials` (
`trialid` int(12) NOT NULL,
  `latinSquare` varchar(30) NOT NULL,
  `sessions` int(11) DEFAULT NULL,
  `userUID` varchar(36) NOT NULL,
  `theAge` smallint(11) DEFAULT NULL,
  `theGender` varchar(6) DEFAULT NULL,
  `theCountry` varchar(30) NOT NULL,
  `playingGames` tinyint(4) DEFAULT NULL,
  `watchingMovies` tinyint(4) DEFAULT NULL,
  `acceptTOU` tinyint(4) DEFAULT NULL,
  `finalQuestion1` tinyint(4) DEFAULT NULL,
  `finalQuestion2` tinyint(4) DEFAULT NULL,
  `finalQuestion3` tinyint(4) DEFAULT NULL,
  `finalQuestion4` tinyint(4) DEFAULT NULL,
  `ipadress` varchar(16) NOT NULL,
  `screenWidth` smallint(6) NOT NULL,
  `screenHeight` smallint(6) NOT NULL,
  `systemLanguage` varchar(5) NOT NULL,
  `userLanguage` varchar(30) NOT NULL,
  `cookies` varchar(5) DEFAULT NULL,
  `platform` varchar(30) NOT NULL,
  `appCodeName` varchar(30) NOT NULL,
  `appVersion` varchar(15) DEFAULT NULL,
  `product` varchar(30) NOT NULL,
  `browser` varchar(20) DEFAULT NULL,
  `webgl` varchar(4) DEFAULT NULL,
  `timeDate` varchar(40) NOT NULL,
  `timeWelcome` bigint(20) DEFAULT NULL,
  `timeStart` bigint(20) DEFAULT NULL,
  `timeEnd` bigint(20) DEFAULT NULL,
  `timeMainSessionTime` bigint(20) DEFAULT NULL,
  `timeDuration` bigint(20) DEFAULT NULL,
  `faceGender` double DEFAULT NULL,
  `faceStyle` double DEFAULT NULL,
  `skinDetails` double DEFAULT NULL,
  `skinColor` double DEFAULT NULL,
  `hairColor` double DEFAULT NULL,
  `eyeColor` double DEFAULT NULL,
  `eyeShape` double DEFAULT NULL,
  `eyeOpening` double DEFAULT NULL,
  `eyeSize` double DEFAULT NULL,
  `eyeHeight` double DEFAULT NULL,
  `eyeDistance` double DEFAULT NULL,
  `eyeDepth` double DEFAULT NULL,
  `eyeRotation` double DEFAULT NULL,
  `eyebrowsColor` double DEFAULT NULL,
  `eyebrowsShape` double DEFAULT NULL,
  `eyebrowsLine` double DEFAULT NULL,
  `noseShape` double DEFAULT NULL,
  `noseLength` double DEFAULT NULL,
  `noseWidth` double DEFAULT NULL,
  `noseBridge` double DEFAULT NULL,
  `noseCartilage` double DEFAULT NULL,
  `foreheadHeight` double DEFAULT NULL,
  `cheeksBone` double DEFAULT NULL,
  `jawShape` double DEFAULT NULL,
  `jawChin` double DEFAULT NULL,
  `jawLength` double DEFAULT NULL,
  `throatSize` double DEFAULT NULL,
  `earSize` double DEFAULT NULL,
  `mouthVolume` double DEFAULT NULL,
  `lipRatio` double DEFAULT NULL,
  `mouthOverlap` double DEFAULT NULL,
  `mouthWidth` double DEFAULT NULL,
  `mouthHeight` double DEFAULT NULL,
  `mouthDepth` double DEFAULT NULL,
  `eyeShadow` double DEFAULT NULL,
  `lipStick` double DEFAULT NULL,
  `rouge` double DEFAULT NULL,
  `faceGenderRst` smallint(6) DEFAULT NULL,
  `faceStyleRst` smallint(6) DEFAULT NULL,
  `skinDetailsRst` smallint(6) DEFAULT NULL,
  `skinColorRst` smallint(6) DEFAULT NULL,
  `hairColorRst` smallint(6) DEFAULT NULL,
  `eyeColorRst` smallint(6) DEFAULT NULL,
  `eyeShapeRst` smallint(6) DEFAULT NULL,
  `eyeOpeningRst` smallint(6) DEFAULT NULL,
  `eyeSizeRst` smallint(6) DEFAULT NULL,
  `eyeHeightRst` smallint(6) DEFAULT NULL,
  `eyeDistanceRst` smallint(6) DEFAULT NULL,
  `eyeDepthRst` smallint(6) DEFAULT NULL,
  `eyeRotationRst` smallint(6) DEFAULT NULL,
  `eyebrowsColorRst` smallint(6) DEFAULT NULL,
  `eyebrowsShapeRst` smallint(6) DEFAULT NULL,
  `eyebrowsLineRst` smallint(6) DEFAULT NULL,
  `noseShapeRst` smallint(6) DEFAULT NULL,
  `noseWidthRst` smallint(6) DEFAULT NULL,
  `noseLengthRst` smallint(6) DEFAULT NULL,
  `noseBridgeRst` smallint(6) DEFAULT NULL,
  `noseCartilageRst` smallint(6) DEFAULT NULL,
  `foreheadHeightRst` smallint(6) DEFAULT NULL,
  `cheeksBoneRst` smallint(6) DEFAULT NULL,
  `jawShapeRst` smallint(6) DEFAULT NULL,
  `jawChinRst` smallint(6) DEFAULT NULL,
  `jawLengthRst` smallint(6) DEFAULT NULL,
  `throatSizeRst` smallint(6) DEFAULT NULL,
  `earSizeRst` smallint(6) DEFAULT NULL,
  `mouthVolumeRst` smallint(6) DEFAULT NULL,
  `lipRatioRst` smallint(6) DEFAULT NULL,
  `mouthOverlapRst` smallint(6) DEFAULT NULL,
  `mouthWidthRst` smallint(6) DEFAULT NULL,
  `mouthHeightRst` smallint(6) DEFAULT NULL,
  `mouthDepthRst` smallint(6) DEFAULT NULL,
  `eyeShadowRst` smallint(6) DEFAULT NULL,
  `lipStickRst` smallint(6) DEFAULT NULL,
  `rougeRst` smallint(6) DEFAULT NULL,
  `faceGenderClk` smallint(6) DEFAULT NULL,
  `faceStyleClk` smallint(6) DEFAULT NULL,
  `skinDetailsClk` smallint(6) DEFAULT NULL,
  `skinColorClk` smallint(6) DEFAULT NULL,
  `hairColorClk` smallint(6) DEFAULT NULL,
  `eyeColorClk` smallint(6) DEFAULT NULL,
  `eyeShapeClk` smallint(6) DEFAULT NULL,
  `eyeOpeningClk` smallint(6) DEFAULT NULL,
  `eyeSizeClk` smallint(6) DEFAULT NULL,
  `eyeHeightClk` smallint(6) DEFAULT NULL,
  `eyeDistanceClk` smallint(6) DEFAULT NULL,
  `eyeDepthClk` smallint(6) DEFAULT NULL,
  `eyeRotationClk` smallint(6) DEFAULT NULL,
  `eyebrowsColorClk` smallint(6) DEFAULT NULL,
  `eyebrowsShapeClk` smallint(6) DEFAULT NULL,
  `eyebrowsLineClk` smallint(6) DEFAULT NULL,
  `noseShapeClk` smallint(6) DEFAULT NULL,
  `noseLengthClk` smallint(6) DEFAULT NULL,
  `noseWidthClk` smallint(6) DEFAULT NULL,
  `noseBridgeClk` smallint(6) DEFAULT NULL,
  `noseCartilageClk` smallint(6) DEFAULT NULL,
  `foreheadHeightClk` smallint(6) DEFAULT NULL,
  `cheeksBoneClk` smallint(6) DEFAULT NULL,
  `jawShapeClk` smallint(6) DEFAULT NULL,
  `jawChinClk` smallint(6) DEFAULT NULL,
  `jawLengthClk` smallint(6) DEFAULT NULL,
  `earSizeClk` smallint(6) DEFAULT NULL,
  `throatSizeClk` smallint(6) DEFAULT NULL,
  `mouthVolumeClk` smallint(6) DEFAULT NULL,
  `lipRatioClk` smallint(6) DEFAULT NULL,
  `mouthOverlapClk` smallint(6) DEFAULT NULL,
  `mouthWidthClk` smallint(6) DEFAULT NULL,
  `mouthHeightClk` smallint(6) DEFAULT NULL,
  `mouthDepthClk` smallint(6) DEFAULT NULL,
  `eyeShadowClk` smallint(6) DEFAULT NULL,
  `lipStickClk` smallint(6) DEFAULT NULL,
  `rougeClk` smallint(6) DEFAULT NULL,
  `faceGenderMM` int(11) DEFAULT NULL,
  `faceStyleMM` int(11) DEFAULT NULL,
  `skinDetailsMM` int(11) DEFAULT NULL,
  `skinColorMM` int(11) DEFAULT NULL,
  `hairColorMM` int(11) DEFAULT NULL,
  `eyeColorMM` int(11) DEFAULT NULL,
  `eyeShapeMM` int(11) DEFAULT NULL,
  `eyeOpeningMM` int(11) DEFAULT NULL,
  `eyeSizeMM` int(11) DEFAULT NULL,
  `eyeHeightMM` int(11) DEFAULT NULL,
  `eyeDistanceMM` int(11) DEFAULT NULL,
  `eyeDepthMM` int(11) DEFAULT NULL,
  `eyeRotationMM` int(11) DEFAULT NULL,
  `eyebrowsColorMM` int(11) DEFAULT NULL,
  `eyebrowsShapeMM` int(11) DEFAULT NULL,
  `eyebrowsLineMM` int(11) DEFAULT NULL,
  `noseShapeMM` int(11) DEFAULT NULL,
  `noseLengthMM` int(11) DEFAULT NULL,
  `noseWidthMM` int(11) DEFAULT NULL,
  `noseBridgeMM` int(11) DEFAULT NULL,
  `noseCartilageMM` int(11) DEFAULT NULL,
  `foreheadHeightMM` int(11) DEFAULT NULL,
  `cheeksBoneMM` int(11) DEFAULT NULL,
  `jawShapeMM` int(11) DEFAULT NULL,
  `jawChinMM` int(11) DEFAULT NULL,
  `jawLengthMM` int(11) DEFAULT NULL,
  `earSizeMM` int(11) DEFAULT NULL,
  `throatSizeMM` int(11) DEFAULT NULL,
  `mouthVolumeMM` int(11) DEFAULT NULL,
  `lipRatioMM` int(11) DEFAULT NULL,
  `mouthOverlapMM` int(11) DEFAULT NULL,
  `mouthWidthMM` int(11) DEFAULT NULL,
  `mouthHeightMM` int(11) DEFAULT NULL,
  `mouthDepthMM` int(11) DEFAULT NULL,
  `eyeShadowMM` int(11) DEFAULT NULL,
  `lipStickMM` int(11) DEFAULT NULL,
  `rougeMM` int(11) DEFAULT NULL,
  `generalMoreBtnClicked` smallint(6) DEFAULT NULL,
  `eyesMoreBtnClicked` smallint(6) DEFAULT NULL,
  `eyebrowsMoreBtnClicked` smallint(6) DEFAULT NULL,
  `noseMoreBtnClicked` smallint(6) DEFAULT NULL,
  `mouthMoreBtnClicked` smallint(6) DEFAULT NULL,
  `makeUpMoreBtnClicked` smallint(6) DEFAULT NULL,
  `outerfaceMoreBtnClicked` smallint(6) DEFAULT NULL,
  `jawMoreBtnClicked` smallint(6) DEFAULT NULL,
  `mainResetClicked` smallint(6) DEFAULT NULL,
  `interfaceResetClicked` smallint(6) DEFAULT NULL,
  `lightsClicked` smallint(6) DEFAULT NULL,
  `todoMoreBtnClicked` smallint(6) DEFAULT NULL,
  `sendClicked` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6406 DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trials`
--
ALTER TABLE `trials`
 ADD PRIMARY KEY (`trialid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trials`
--
ALTER TABLE `trials`
MODIFY `trialid` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
