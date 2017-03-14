window.onload = function(){

  var milkcocoa = MilkCocoa.connectWithApiKey('maxj02e8sgi.mlkcca.com', 'KHFLBGGBGHCHOMCG', 'lNgKVSIXUSIOVQDgiPOlKQPbQkOHPIWUmfcZKVPa');

  ds.on('send', changeViewFromSentMode);

  function changeViewFromSentMode(sent){

    if(sent.value.mode === 'portrait'){

      image.className = '';

    }

    if(sent.value.mode === 'landscape'){

      image.className = 'is-landscape';

    }

  }

};
