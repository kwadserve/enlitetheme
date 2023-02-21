import React, { useState } from 'react';
import Slider from 'react-slick';
import { makeStyles } from 'tss-react/mui';
import 'enl-styles/vendors/slick-carousel/slick-carousel.css';
import 'enl-styles/vendors/slick-carousel/slick.css';
import 'enl-styles/vendors/slick-carousel/slick-theme.css';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import imgData from 'enl-api/images/imgData';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  formControl: {
    width: '50%',
    margin: '0 auto'
  },
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
}));

const getThumb = imgData.map(a => a.thumb);

function ThumbnailCarousel() {
  const [transition, setTransition] = useState('slide');

  const handleChange = event => {
    setTransition(event.target.value);
  };

  const {
    classes
  } = useStyles();
  const settings = {
    customPaging: (i) => (
      <a>
        <img src={getThumb[i]} alt="thumb" />
      </a>
    ),
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: transition === 'fade',
  };
  return (
    <div className={classes.root}>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Carousel Transition</InputLabel>
        <Select
          variant="standard"
          value={transition}
          onChange={(e) => handleChange(e)}
          inputProps={{
            name: 'transition',
            id: 'transition-thumbnail-carousel',
          }}>
          <MenuItem value="slide">Slide</MenuItem>
          <MenuItem value="fade">Fade</MenuItem>
        </Select>
      </FormControl>
      <div className="container thumb-nav custom-nav">
        <Slider {...settings}>
          {imgData.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ThumbnailCarousel;
