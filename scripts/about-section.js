(function($){
  
  const $aboutPic = $('#about-pic-wrapper');
  const $aboutBlock = $('#block-about');
  
  $aboutPic.waypoint({
      handler: function(direction) {
        
        if(direction === 'down'){
          $aboutPic.removeClass('absolute');
          $aboutPic.addClass('fixed');
        }
        
        if(direction === 'up'){
          $aboutPic.removeClass('fixed');
        }
          
      }
  });
  
  $aboutPic.waypoint({
      handler: function(direction) {
          
          if(direction === 'down'){
            $aboutPic.removeClass('fixed');
            $aboutPic.addClass('absolute');
          }
      },
      offset: 'bottom-in-view'
  });
  
  $aboutBlock.waypoint({
      handler: function(direction) {
          
          if(direction === 'up'){
            $aboutPic.removeClass('absolute');
            $aboutPic.addClass('fixed');
          }
      },
      offset: 'bottom-in-view'
  });
   
})(jQuery);


// (function($){

//     const $aboutInfo = $('#about-info');
//     // const $aboutPicContainer = $('#about-pic-container');
//     const $aboutPic = $('#about-pic');

//     $aboutPic.waypoint({
//       handler: function(direction) {
        
//         if(direction === 'down'){
//           $aboutPic.removeClass('absolute');
//           $aboutPic.addClass('fixed');
//         }
        
//         if(direction === 'up'){
//           $aboutPic.removeClass('fixed');
//           // $aboutPicContainer.removeClass('absolute');
//         }
          
//       }
//   });
  
//   $aboutPic.waypoint({
//       handler: function(direction) {
          
//           if(direction === 'down'){
//             $aboutPic.removeClass('fixed');
//             $aboutPic.addClass('absolute');
//           }
//       },
//       offset: 'bottom-in-view'
//   });
  
//   $aboutInfo.waypoint({
//       handler: function(direction) {
          
//           if(direction === 'up'){
//             $aboutPic.removeClass('absolute');
//             $aboutPic.addClass('fixed');
//           }
//           // if(direction == 'down'){
//           //   $aboutPic.removeClass('fixed');
//           //   $aboutPic.addClass('absolute');
//           //   $aboutPicContainer.removeClass('absolute');
           
//       },
//       offset: 'bottom-in-view'
//   });
   
// })(jQuery);

//     $aboutInfo.waypoint({
//         handler: function(direction) {
          

//           if(direction == 'down'){
//             $aboutPic.removeClass('absolute');
//             $aboutPicContainer.removeClass('absolute');
//             $aboutPic.addClass('fixed');
//           }

//           if(direction == 'up'){
//             //console.log(this.element.id + ' hit top...' + direction);
//           }

//         }
//     });

//     $aboutPic.waypoint({
//         handler: function(direction) {

//           if(direction == 'up'){

//             console.log(this.element.id + ' hit top...' + direction);
//             // $aboutPic.removeClass('absolute');
//             // $aboutPicContainer.removeClass('absolute');
//             // $aboutPic.addClass('fixed');
//           }

//         }
//     });

//     $aboutInfo.waypoint({
//         handler: function(direction) {
//           //console.log(this.element.id + ' hit bottom...');

//           if(direction == 'down'){
//             $aboutPic.removeClass('fixed');
//             $aboutPic.addClass('absolute');
//             $aboutPicContainer.addClass('absolute');
//           }

          
//         },
//         offset: 'bottom-in-view'
//     });


// })(jQuery);