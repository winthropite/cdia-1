<html>
<head>
	<title>Events!</title>
	<script type="text/javascript" 
		src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$.post ( 
				'/ajax/citiestarget.php',
				{ 'function' : 'getStates' },
				function (data) {
					$.each(data, function(key, value) {
						$('#states').append(
							'<option value="' + value + '">' +
							value +
							'</option>'
						);
					});
				},
				'json'
			);
			
			$('#states').change(function () {
				$.post(
					'/ajax/citiestarget.php',
					{ 'state' : $('#states').val() },
					function (data) {
						$('#cities').html('<option value="none">Select a City</option>');
						$.each(data, function(key, value) {
							$('#cities').append(
								'<option value="' + value + '">' +
								value +
								'</option>'
							);
						});
						$('#cities').attr('disabled','');
					},
					'json'
				);
			});
			
			$('#cities').change(function() {
				$.post(
					'/ajax/citiestarget.php',
					{ 'state' : $('#states').val(),
					  'city' : $('#cities').val()
					},
					function (data) {
						$('#zipcode').html('<option value="none">Select a zip</option>');
						$.each(data, function(key,value) {
							$('#zipcode').append(
								'<option value="' +
								value + '">' + value +
								'</option>'
							);
						});
						$('#zipcode').attr('disabled','');
					},
					'json'
				);
			});
		});
	</script>
</head>
<body>
	<form id="dropdowns">
		<p><label for="states">State:</label><select name="states" id="states"><option value="none" selected="selected">Select a state</option></select></p>
		<p><label for="cities">City:</label><select name="cities" id="cities" disabled="disabled"></select></p>
		<p><label for="zipcode">Zip:</label><select name="zipcode" id="zipcode" disabled="disabled"></select></p>
	</form>
</body>
</html>