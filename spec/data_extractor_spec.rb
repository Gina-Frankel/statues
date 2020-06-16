# frozen_string_literal: true

require 'data_extractor'

describe 'extract_links_from_string' do
  describe 'extracts link from one piece of the data' do 
    it 'returns figurine of two elephants link as an element in an array when passed a string containing that link' do
      string = '<li class="item artwork icons visible" style="position: absolute; left: 3.94089%; top: 586515px;"><a id="figurine-of-two-elephants-273650" class="" href="https://artuk.org/discover/artworks/figurine-of-two-elephants-273650/search/work_type:sculpturestatue-1888609/page/105" title="View artwork"></a><div class="wrap"><div class="img-wrap"><img src="https://artuk.org/skins/artuk/img/placeholder-artwork-listing.png"> <div class="actions "> <div class="action-toggle"> <a class="toggle fav ajax-action no-user " data-add-fav="" data-action="fav-artwork" href="https://artuk.org/favourite/figurine-of-two-elephants-273650" data-toggle="tooltip-hover" data-placement="top" title="" data-original-title="Sign in to favourite" data-title-add="Add to favourites" data-title-remove="Remove from favourites"></a> </div><div class="album action-toggle toolbar_icon no-user" data-action-dropdown=""> <div class="toggle album toolbar_icon" data-toggle="tooltip-hover" data-placement="top" title="Sign in to curate" data-original-title="Sign in to curate"> </div></div></div></div></div><div class="info"> <div class="icons"> </div><span class="title"> Figurine of Two Elephants </span> <span class="artist"> unknown artist </span> </div><div class="more-info"> <span class="title"> Figurine of Two Elephants </span> <span class="artist"> University of Birmingham </span> </div></li>'
      expect(extract_links_from_string(string)).to eq ['https://artuk.org/discover/artworks/figurine-of-two-elephants-273650/']
    end

    it 'returns ..... link as an element in an array when passed a string containing that link' do
      string = '<li class="item artwork icons visible" style="position: absolute; left: 3.94089%; top: 586515px;"><a id="figurine-of-two-elephants-273650" class="" href="https://artuk.org/discover/artworks/figurine-of-three-elephants-273650/search/work_type:sculpturestatue-1888609/page/105" title="View artwork"></a><div class="wrap"><div class="img-wrap"><img src="https://artuk.org/skins/artuk/img/placeholder-artwork-listing.png"> <div class="actions "> <div class="action-toggle"> <a class="toggle fav ajax-action no-user " data-add-fav="" data-action="fav-artwork" href="https://artuk.org/favourite/figurine-of-three-elephants-273650" data-toggle="tooltip-hover" data-placement="top" title="" data-original-title="Sign in to favourite" data-title-add="Add to favourites" data-title-remove="Remove from favourites"></a> </div><div class="album action-toggle toolbar_icon no-user" data-action-dropdown=""> <div class="toggle album toolbar_icon" data-toggle="tooltip-hover" data-placement="top" title="Sign in to curate" data-original-title="Sign in to curate"> </div></div></div></div></div><div class="info"> <div class="icons"> </div><span class="title"> Figurine of Two Elephants </span> <span class="artist"> unknown artist </span> </div><div class="more-info"> <span class="title"> Figurine of Two Elephants </span> <span class="artist"> University of Birmingham </span> </div></li>'
      expect(extract_links_from_string(string)).to eq ['https://artuk.org/discover/artworks/figurine-of-three-elephants-273650/']
    end
  end 

  describe 'extracts the link from more than one piece of data' do
    it 'returns two elephant link and three elephant link as elements in an array' do
      string = '<li class="item artwork icons visible" style="position: absolute; left: 3.94089%; top: 586515px;"><a id="figurine-of-two-elephants-273650" class="" href="https://artuk.org/discover/artworks/figurine-of-two-elephants-273650/search/work_type:sculpturestatue-1888609/page/105" title="View artwork"></a><div class="wrap"><div class="img-wrap"><img src="https://artuk.org/skins/artuk/img/placeholder-artwork-listing.png"> <div class="actions "> <div class="action-toggle"> <a class="toggle fav ajax-action no-user " data-add-fav="" data-action="fav-artwork" href="https://artuk.org/favourite/figurine-of-two-elephants-273650" data-toggle="tooltip-hover" data-placement="top" title="" data-original-title="Sign in to favourite" data-title-add="Add to favourites" data-title-remove="Remove from favourites"></a> </div><div class="album action-toggle toolbar_icon no-user" data-action-dropdown=""> <div class="toggle album toolbar_icon" data-toggle="tooltip-hover" data-placement="top" title="Sign in to curate" data-original-title="Sign in to curate"> </div></div></div></div></div><div class="info"> <div class="icons"> </div><span class="title"> Figurine of Two Elephants </span> <span class="artist"> unknown artist </span> </div><div class="more-info"> <span class="title"> Figurine of Two Elephants </span> <span class="artist"> University of Birmingham </span> </div></li> <li class="item artwork icons visible" style="position: absolute; left: 3.94089%; top: 586515px;"><a id="figurine-of-two-elephants-273650" class="" href="https://artuk.org/discover/artworks/figurine-of-three-elephants-273650/search/work_type:sculpturestatue-1888609/page/105" title="View artwork"></a><div class="wrap"><div class="img-wrap"><img src="https://artuk.org/skins/artuk/img/placeholder-artwork-listing.png"> <div class="actions "> <div class="action-toggle"> <a class="toggle fav ajax-action no-user " data-add-fav="" data-action="fav-artwork" href="https://artuk.org/favourite/figurine-of-three-elephants-273650" data-toggle="tooltip-hover" data-placement="top" title="" data-original-title="Sign in to favourite" data-title-add="Add to favourites" data-title-remove="Remove from favourites"></a> </div><div class="album action-toggle toolbar_icon no-user" data-action-dropdown=""> <div class="toggle album toolbar_icon" data-toggle="tooltip-hover" data-placement="top" title="Sign in to curate" data-original-title="Sign in to curate"> </div></div></div></div></div><div class="info"> <div class="icons"> </div><span class="title"> Figurine of Two Elephants </span> <span class="artist"> unknown artist </span> </div><div class="more-info"> <span class="title"> Figurine of Two Elephants </span> <span class="artist"> University of Birmingham </span> </div></li>'
      expect(extract_links_from_string(string)).to eq ['https://artuk.org/discover/artworks/figurine-of-two-elephants-273650/','https://artuk.org/discover/artworks/figurine-of-three-elephants-273650/']
    end
  end

end

