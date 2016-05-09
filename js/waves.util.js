/******************************************************************************
 * Copyright © 2016 The Waves Developers.                                *
 *                                                                            *
 * See the LICENSE files at                                                   *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * Waves software, including this file, may be copied, modified, propagated,  *
 * or distributed except according to the terms contained in the LICENSE      *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

/**
 * @depends {waves.js}
 */
var Waves = (function (Waves, $, undefined) {

    var LOCALE_DATE_FORMATS = {
        "ar-SA": "dd/MM/yy",
        "bg-BG": "dd.M.yyyy",
        "ca-ES": "dd/MM/yyyy",
        "zh-TW": "yyyy/M/d",
        "cs-CZ": "d.M.yyyy",
        "da-DK": "dd-MM-yyyy",
        "de-DE": "dd.MM.yyyy",
        "el-GR": "d/M/yyyy",
        "en-US": "M/d/yyyy",
        "fi-FI": "d.M.yyyy",
        "fr-FR": "dd/MM/yyyy",
        "he-IL": "dd/MM/yyyy",
        "hu-HU": "yyyy. MM. dd.",
        "is-IS": "d.M.yyyy",
        "it-IT": "dd/MM/yyyy",
        "ja-JP": "yyyy/MM/dd",
        "ko-KR": "yyyy-MM-dd",
        "nl-NL": "d-M-yyyy",
        "nb-NO": "dd.MM.yyyy",
        "pl-PL": "yyyy-MM-dd",
        "pt-BR": "d/M/yyyy",
        "ro-RO": "dd.MM.yyyy",
        "ru-RU": "dd.MM.yyyy",
        "hr-HR": "d.M.yyyy",
        "sk-SK": "d. M. yyyy",
        "sq-AL": "yyyy-MM-dd",
        "sv-SE": "yyyy-MM-dd",
        "th-TH": "d/M/yyyy",
        "tr-TR": "dd.MM.yyyy",
        "ur-PK": "dd/MM/yyyy",
        "id-ID": "dd/MM/yyyy",
        "uk-UA": "dd.MM.yyyy",
        "be-BY": "dd.MM.yyyy",
        "sl-SI": "d.M.yyyy",
        "et-EE": "d.MM.yyyy",
        "lv-LV": "yyyy.MM.dd.",
        "lt-LT": "yyyy.MM.dd",
        "fa-IR": "MM/dd/yyyy",
        "vi-VN": "dd/MM/yyyy",
        "hy-AM": "dd.MM.yyyy",
        "az-Latn-AZ": "dd.MM.yyyy",
        "eu-ES": "yyyy/MM/dd",
        "mk-MK": "dd.MM.yyyy",
        "af-ZA": "yyyy/MM/dd",
        "ka-GE": "dd.MM.yyyy",
        "fo-FO": "dd-MM-yyyy",
        "hi-IN": "dd-MM-yyyy",
        "ms-MY": "dd/MM/yyyy",
        "kk-KZ": "dd.MM.yyyy",
        "ky-KG": "dd.MM.yy",
        "sw-KE": "M/d/yyyy",
        "uz-Latn-UZ": "dd/MM yyyy",
        "tt-RU": "dd.MM.yyyy",
        "pa-IN": "dd-MM-yy",
        "gu-IN": "dd-MM-yy",
        "ta-IN": "dd-MM-yyyy",
        "te-IN": "dd-MM-yy",
        "kn-IN": "dd-MM-yy",
        "mr-IN": "dd-MM-yyyy",
        "sa-IN": "dd-MM-yyyy",
        "mn-MN": "yy.MM.dd",
        "gl-ES": "dd/MM/yy",
        "kok-IN": "dd-MM-yyyy",
        "syr-SY": "dd/MM/yyyy",
        "dv-MV": "dd/MM/yy",
        "ar-IQ": "dd/MM/yyyy",
        "zh-CN": "yyyy/M/d",
        "de-CH": "dd.MM.yyyy",
        "en-GB": "dd/MM/yyyy",
        "es-MX": "dd/MM/yyyy",
        "fr-BE": "d/MM/yyyy",
        "it-CH": "dd.MM.yyyy",
        "nl-BE": "d/MM/yyyy",
        "nn-NO": "dd.MM.yyyy",
        "pt-PT": "dd-MM-yyyy",
        "sr-Latn-CS": "d.M.yyyy",
        "sv-FI": "d.M.yyyy",
        "az-Cyrl-AZ": "dd.MM.yyyy",
        "ms-BN": "dd/MM/yyyy",
        "uz-Cyrl-UZ": "dd.MM.yyyy",
        "ar-EG": "dd/MM/yyyy",
        "zh-HK": "d/M/yyyy",
        "de-AT": "dd.MM.yyyy",
        "en-AU": "d/MM/yyyy",
        "es-ES": "dd/MM/yyyy",
        "fr-CA": "yyyy-MM-dd",
        "sr-Cyrl-CS": "d.M.yyyy",
        "ar-LY": "dd/MM/yyyy",
        "zh-SG": "d/M/yyyy",
        "de-LU": "dd.MM.yyyy",
        "en-CA": "dd/MM/yyyy",
        "es-GT": "dd/MM/yyyy",
        "fr-CH": "dd.MM.yyyy",
        "ar-DZ": "dd-MM-yyyy",
        "zh-MO": "d/M/yyyy",
        "de-LI": "dd.MM.yyyy",
        "en-NZ": "d/MM/yyyy",
        "es-CR": "dd/MM/yyyy",
        "fr-LU": "dd/MM/yyyy",
        "ar-MA": "dd-MM-yyyy",
        "en-IE": "dd/MM/yyyy",
        "es-PA": "MM/dd/yyyy",
        "fr-MC": "dd/MM/yyyy",
        "ar-TN": "dd-MM-yyyy",
        "en-ZA": "yyyy/MM/dd",
        "es-DO": "dd/MM/yyyy",
        "ar-OM": "dd/MM/yyyy",
        "en-JM": "dd/MM/yyyy",
        "es-VE": "dd/MM/yyyy",
        "ar-YE": "dd/MM/yyyy",
        "en-029": "MM/dd/yyyy",
        "es-CO": "dd/MM/yyyy",
        "ar-SY": "dd/MM/yyyy",
        "en-BZ": "dd/MM/yyyy",
        "es-PE": "dd/MM/yyyy",
        "ar-JO": "dd/MM/yyyy",
        "en-TT": "dd/MM/yyyy",
        "es-AR": "dd/MM/yyyy",
        "ar-LB": "dd/MM/yyyy",
        "en-ZW": "M/d/yyyy",
        "es-EC": "dd/MM/yyyy",
        "ar-KW": "dd/MM/yyyy",
        "en-PH": "M/d/yyyy",
        "es-CL": "dd-MM-yyyy",
        "ar-AE": "dd/MM/yyyy",
        "es-UY": "dd/MM/yyyy",
        "ar-BH": "dd/MM/yyyy",
        "es-PY": "dd/MM/yyyy",
        "ar-QA": "dd/MM/yyyy",
        "es-BO": "dd/MM/yyyy",
        "es-SV": "dd/MM/yyyy",
        "es-HN": "dd/MM/yyyy",
        "es-NI": "dd/MM/yyyy",
        "es-PR": "dd/MM/yyyy",
        "am-ET": "d/M/yyyy",
        "tzm-Latn-DZ": "dd-MM-yyyy",
        "iu-Latn-CA": "d/MM/yyyy",
        "sma-NO": "dd.MM.yyyy",
        "mn-Mong-CN": "yyyy/M/d",
        "gd-GB": "dd/MM/yyyy",
        "en-MY": "d/M/yyyy",
        "prs-AF": "dd/MM/yy",
        "bn-BD": "dd-MM-yy",
        "wo-SN": "dd/MM/yyyy",
        "rw-RW": "M/d/yyyy",
        "qut-GT": "dd/MM/yyyy",
        "sah-RU": "MM.dd.yyyy",
        "gsw-FR": "dd/MM/yyyy",
        "co-FR": "dd/MM/yyyy",
        "oc-FR": "dd/MM/yyyy",
        "mi-NZ": "dd/MM/yyyy",
        "ga-IE": "dd/MM/yyyy",
        "se-SE": "yyyy-MM-dd",
        "br-FR": "dd/MM/yyyy",
        "smn-FI": "d.M.yyyy",
        "moh-CA": "M/d/yyyy",
        "arn-CL": "dd-MM-yyyy",
        "ii-CN": "yyyy/M/d",
        "dsb-DE": "d. M. yyyy",
        "ig-NG": "d/M/yyyy",
        "kl-GL": "dd-MM-yyyy",
        "lb-LU": "dd/MM/yyyy",
        "ba-RU": "dd.MM.yy",
        "nso-ZA": "yyyy/MM/dd",
        "quz-BO": "dd/MM/yyyy",
        "yo-NG": "d/M/yyyy",
        "ha-Latn-NG": "d/M/yyyy",
        "fil-PH": "M/d/yyyy",
        "ps-AF": "dd/MM/yy",
        "fy-NL": "d-M-yyyy",
        "ne-NP": "M/d/yyyy",
        "se-NO": "dd.MM.yyyy",
        "iu-Cans-CA": "d/M/yyyy",
        "sr-Latn-RS": "d.M.yyyy",
        "si-LK": "yyyy-MM-dd",
        "sr-Cyrl-RS": "d.M.yyyy",
        "lo-LA": "dd/MM/yyyy",
        "km-KH": "yyyy-MM-dd",
        "cy-GB": "dd/MM/yyyy",
        "bo-CN": "yyyy/M/d",
        "sms-FI": "d.M.yyyy",
        "as-IN": "dd-MM-yyyy",
        "ml-IN": "dd-MM-yy",
        "en-IN": "dd-MM-yyyy",
        "or-IN": "dd-MM-yy",
        "bn-IN": "dd-MM-yy",
        "tk-TM": "dd.MM.yy",
        "bs-Latn-BA": "d.M.yyyy",
        "mt-MT": "dd/MM/yyyy",
        "sr-Cyrl-ME": "d.M.yyyy",
        "se-FI": "d.M.yyyy",
        "zu-ZA": "yyyy/MM/dd",
        "xh-ZA": "yyyy/MM/dd",
        "tn-ZA": "yyyy/MM/dd",
        "hsb-DE": "d. M. yyyy",
        "bs-Cyrl-BA": "d.M.yyyy",
        "tg-Cyrl-TJ": "dd.MM.yy",
        "sr-Latn-BA": "d.M.yyyy",
        "smj-NO": "dd.MM.yyyy",
        "rm-CH": "dd/MM/yyyy",
        "smj-SE": "yyyy-MM-dd",
        "quz-EC": "dd/MM/yyyy",
        "quz-PE": "dd/MM/yyyy",
        "hr-BA": "d.M.yyyy.",
        "sr-Latn-ME": "d.M.yyyy",
        "sma-SE": "yyyy-MM-dd",
        "en-SG": "d/M/yyyy",
        "ug-CN": "yyyy-M-d",
        "sr-Cyrl-BA": "d.M.yyyy",
        "es-US": "M/d/yyyy"
    }

    var LANG = window.navigator.userLanguage || window.navigator.language;
    var LOCALE_DATE_FORMAT = LOCALE_DATE_FORMATS[LANG] || 'dd/MM/yyyy';

    Waves._hash = {
        init: SHA256_init,
        update: SHA256_write,
        getBytes: SHA256_finalize
    };


    Waves.signatureData = function(sender, recipient, amount, fee) {

        var typeBytes = converters.stringToByteArray('2');
        var times = Waves.getTime();
        var timestampBytes = converters.stringToByteArray(times);
        var amountBytes = converters.stringToByteArray(amount);
        var feeBytes = converters.stringToByteArray(fee);

        //var recipientBytes = Waves.from_b58(converts,'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

        var decode = Waves.B58.decode(recipient);
        console.log(decode);
        //var decode = Waves.from_b58(encode,'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz')
        //console.log(decode);

    }

    Waves.signBytes = function(message, seed) {

        var messageBytes = message;
        var seedBytes = converters.stringToByteArray(seed);

        var digest = simpleHash(seedBytes);
        var s = curve25519.keygen(digest).s;

        var m = simpleHash(messageBytes);
        Waves._hash.init();
        Waves._hash.update(m);
        Waves._hash.update(s);
        var x = Waves._hash.getBytes();

        var y = curve25519.keygen(x).p;

        Waves._hash.init();
        Waves._hash.update(m);
        Waves._hash.update(y);
        var h = Waves._hash.getBytes();

        var v = curve25519.sign(h, x, s);

        return v.concat(h);
    }

    //Get timestamp in Waves
    Waves.getTime = function() {
        return Date.now();
    }

    //Returns publicKey
    Waves.getPublicKey = function(secretPhrase)
    {
        SHA256_init();
        SHA256_write(converters.stringToByteArray(secretPhrase));
        var ky = converters.byteArrayToHexString(curve25519.keygen(SHA256_finalize()).p);

        //Array bytes in converters.hexStringToByteArray(ky);
        return Waves.to_b58(converters.hexStringToByteArray(ky),'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    }

    //Returns privateKey
    Waves.getPrivateKey = function (secretPhrase) {
        SHA256_init();
        SHA256_write(converters.stringToByteArray(secretPhrase));
        var ky = converters.byteArrayToHexString(curve25519.keygen(SHA256_finalize()).k);
        
        //Array Bytes in converters.hexStringToByteArray(ky)
        return Waves.to_b58(converters.hexStringToByteArray(ky),'123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    }

    Waves.formatVolume = function (volume) {
		var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
		if (volume == 0) return '0 B';
		var i = parseInt(Math.floor(Math.log(volume) / Math.log(1024)));

        volume = Math.round(volume / Math.pow(1024, i));
		var size = sizes[i];

        var digits = [], formattedVolume = "";
		do {
			digits[digits.length] = volume % 10;
			volume = Math.floor(volume / 10);
		} while (volume > 0);
		for (i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedVolume = "'" + formattedVolume;
			}
			formattedVolume = digits[i] + formattedVolume;
		}
		return formattedVolume + " " + size;
	}


    Waves.calculatePercentage = function (a, b, rounding_mode) {
		if (String(b) == "0") {
            return "0";
        }
        if (rounding_mode != undefined) { // Rounding mode from Big.js
			Big.RM = rounding_mode;
		}
		a = new Big(String(a));
		b = new Big(String(b));

		var result = a.div(b).times(new Big("100")).toFixed(2);
		Big.RM = 1;

		return result.toString();
	}

   
    Waves.amountToPrecision = function (amount, decimals) {
		amount = String(amount);

		var parts = amount.split(".");

		//no fractional part
		if (parts.length == 1) {
			return parts[0];
		} else if (parts.length == 2) {
			var fraction = parts[1];
			fraction = fraction.replace(/0+$/, "");

			if (fraction.length > decimals) {
				fraction = fraction.substring(0, decimals);
			}

			return parts[0] + "." + fraction;
		} else {
			throw $.t("error_invalid_input");
		}
	}


    Waves.format = function (params, no_escaping) {
        var amount;
		if (typeof params != "object") {
            amount = String(params);
            var negative = amount.charAt(0) == "-" ? "-" : "";
            if (negative) {
                amount = amount.substring(1);
            }
            params = {
                "amount": amount,
                "negative": negative,
                "mantissa": ""
            };
        }

        amount = String(params.amount);

		var digits = amount.split("").reverse();
		var formattedAmount = "";

		for (var i = 0; i < digits.length; i++) {
			if (i > 0 && i % 3 == 0) {
				formattedAmount = "," + formattedAmount;
			}
			formattedAmount = digits[i] + formattedAmount;
        }

        var output = (params.negative ? params.negative : "") + formattedAmount + params.mantissa;

		if (!no_escaping) {
			output = output.escapeHTML();
		}

		return output;
	}


    Waves.formatTimestamp = function (timestamp, date_only, isAbsoluteTime) {
        var date;
		if (typeof timestamp == "object") {
            date = timestamp;
        } else if (isAbsoluteTime) {
            date = new Date(timestamp);
        } else {
            date = new Date(timestamp);
		}

		if (!isNaN(date) && typeof(date.getFullYear) == 'function') {
			var d = date.getDate();
			var dd = d < 10 ? '0' + d : d;
			var M = date.getMonth() + 1;
			var MM = M < 10 ? '0' + M : M;
			var yyyy = date.getFullYear();
            var yy = String(yyyy).substring(2);

            var res = LOCALE_DATE_FORMAT
                .replace(/dd/g, dd)
                .replace(/d/g, d)
                .replace(/MM/g, MM)
                .replace(/M/g, M)
                .replace(/yyyy/g, yyyy)
                .replace(/yy/g, yy);

            if (!date_only) {
                var hours = date.getHours();
                var originalHours = hours;
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();

                if (!Waves.settings || Waves.settings["24_hour_format"] == "0") {
                    if (originalHours == 0) {
                        hours += 12;
                    } else if (originalHours >= 13 && originalHours <= 23) {
                        hours -= 12;
                    }
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                res += " " + hours + ":" + minutes + ":" + seconds;

                if (!Waves.settings || Waves.settings["24_hour_format"] == "0") {
                    res += " " + (originalHours >= 12 ? "PM" : "AM");
				}
			}

			return res;
		} else {
			return date.toLocaleString();
		}
	}

    Waves.isPrivateIP = function (ip) {
		if (!/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
			return false;
		}
		var parts = ip.split('.');
      return parts[0] === '10' || parts[0] == '127' || parts[0] === '172' && (parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31) || parts[0] === '192' && parts[1] === '168';
	}

    Waves.convertToHex16 = function (str) {
		var hex, i;
		var result = "";
		for (i = 0; i < str.length; i++) {
			hex = str.charCodeAt(i).toString(16);
			result += ("000" + hex).slice(-4);
		}

		return result;
	}

    Waves.convertFromHex16 = function (hex) {
		var j;
		var hexes = hex.match(/.{1,4}/g) || [];
		var back = "";
		for (j = 0; j < hexes.length; j++) {
			back += String.fromCharCode(parseInt(hexes[j], 16));
		}

		return back;
	}

    Waves.convertFromHex8 = function (hex) {
        var hexStr = hex.toString(); //force conversion
		var str = '';
        for (var i = 0; i < hexStr.length; i += 2) {
            str += String.fromCharCode(parseInt(hexStr.substr(i, 2), 16));
        }
		return str;
	}

    Waves.convertToHex8 = function (str) {
		var hex = '';
		for (var i = 0; i < str.length; i++) {
			hex += '' + str.charCodeAt(i).toString(16);
		}
		return hex;
	}


    Waves.setCookie = function (name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
		} else {
			expires = "";
		}
        //noinspection JSDeprecatedSymbols
		document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	}

    Waves.getCookie = function (name) {
        //noinspection JSDeprecatedSymbols
		var nameEQ = escape(name) + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
		}
            if (c.indexOf(nameEQ) === 0) {
                //noinspection JSDeprecatedSymbols
                return unescape(c.substring(nameEQ.length, c.length));
            }
        }
		return null;
	}

    Waves.deleteCookie = function (name) {
		Waves.setCookie(name, "", -1);
	}

    Waves.isControlKey = function (charCode) {
        return !(charCode >= 32 || charCode == 10 || charCode == 13);
    }

    Waves.getUrlParameter = function (sParam) {
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
			var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
				return sParameterName[1];
			}
		}
		return false;
    }

	// http://stackoverflow.com/questions/12518830/java-string-getbytesutf8-javascript-analog
    Waves.getUtf8Bytes = function (str) {
        //noinspection JSDeprecatedSymbols
        var utf8 = unescape(encodeURIComponent(str));
        var arr = [];
        for (var i = 0; i < utf8.length; i++) {
            arr[i] = utf8.charCodeAt(i);
        }
        return arr;
    }

 
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    Waves.strToUTF8Arr = function(str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80) utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6),
                          0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12),
                          0x80 | ((charcode >> 6) & 0x3f),
                          0x80 | (charcode & 0x3f));
            }
            // surrogate pair
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                          | (str.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18),
                          0x80 | ((charcode >> 12) & 0x3f),
                          0x80 | ((charcode >> 6) & 0x3f),
                          0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    }

    function byteArrayToBigInteger(byteArray) {
        var value = new BigInteger("0", 10);
        for (var i = byteArray.length - 1; i >= 0; i--) {
            value = value.multiply(new BigInteger("256", 10)).add(new BigInteger(byteArray[i].toString(10), 10));
        }
        return value;
    }

    Waves.initialCaps = function(str) {
        if (!str || str == "") {
            return str;
        }
        var firstChar = str.charAt(0).toUpperCase();
        if (str.length == 1) {
            return firstChar;
        }
        return firstChar + str.slice(1);
    }

    Waves.addEllipsis = function(str, length) {
        if (!str || str == "" || str.length <= length) {
            return str;
        }
        return str.substring(0, length) + "...";
    }

    //Taken from https://gist.github.com/diafygi/90a3e80ca1c2793220e5/
    Waves.to_b58 = function(
        B,            //Uint8Array raw byte input
        A             //Base58 characters (i.e. "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    ) {
        var d = [],   //the array for storing the stream of base58 digits
            s = "",   //the result string variable that will be returned
            i,        //the iterator variable for the byte input
            j,        //the iterator variable for the base58 digit array (d)
            c,        //the carry amount variable that is used to overflow from the current base58 digit to the next base58 digit
            n;        //a temporary placeholder variable for the current base58 digit
        for(i in B) { //loop through each byte in the input stream
            j = 0,                           //reset the base58 digit iterator
            c = B[i];                        //set the initial carry amount equal to the current byte amount
            s += c || s.length ^ i ? "" : 1; //prepend the result string with a "1" (0 in base58) if the byte stream is zero and non-zero bytes haven't been seen yet (to ensure correct decode length)
            while(j in d || c) {             //start looping through the digits until there are no more digits and no carry amount
                n = d[j];                    //set the placeholder for the current base58 digit
                n = n ? n * 256 + c : c;     //shift the current base58 one byte and add the carry amount (or just add the carry amount if this is a new digit)
                c = n / 58 | 0;              //find the new carry amount (floored integer of current digit divided by 58)
                d[j] = n % 58;               //reset the current base58 digit to the remainder (the carry amount will pass on the overflow)
                j++                          //iterate to the next base58 digit
            }
        }
        while(j--)        //since the base58 digits are backwards, loop through them in reverse order
            s += A[d[j]]; //lookup the character associated with each base58 digit
        return s          //return the final base58 string
    }


    Waves.from_b58 = function(
        S,            //Base58 encoded string input
        A             //Base58 characters (i.e. "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    ) {
        var d = [],   //the array for storing the stream of decoded bytes
            b = [],   //the result byte array that will be returned
            i,        //the iterator variable for the base58 string
            j,        //the iterator variable for the byte array (d)
            c,        //the carry amount variable that is used to overflow from the current byte to the next byte
            n;        //a temporary placeholder variable for the current byte
        for(i in S) { //loop through each base58 character in the input string
            j = 0,                             //reset the byte iterator
            c = A.indexOf( S[i] );             //set the initial carry amount equal to the current base58 digit
            if(c < 0)                          //see if the base58 digit lookup is invalid (-1)
                return undefined;              //if invalid base58 digit, bail out and return undefined
            c || b.length ^ i ? i : b.push(0); //prepend the result array with a zero if the base58 digit is zero and non-zero characters haven't been seen yet (to ensure correct decode length)
            while(j in d || c) {               //start looping through the bytes until there are no more bytes and no carry amount
                n = d[j];                      //set the placeholder for the current byte
                n = n ? n * 58 + c : c;        //shift the current byte 58 units and add the carry amount (or just add the carry amount if this is a new byte)
                c = n >> 8;                    //find the new carry amount (1-byte shift of current byte value)
                d[j] = n % 256;                //reset the current byte to the remainder (the carry amount will pass on the overflow)
                j++                            //iterate to the next byte
            }
        }
        while(j--)               //since the byte array is backwards, loop through it in reverse order
            b.push( d[j] );      //append each byte to the result
        return new Uint8Array(b) //return the final byte array in Uint8Array format
    }

    Waves.B58 = B58 = {
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    base: BigInteger.valueOf(58),

        /**
         * Convert a byte array to a base58-encoded string.
         *
         * Written by Mike Hearn for BitcoinJ.
         *   Copyright (c) 2011 Google Inc.
         *
         * Ported to JavaScript by Stefan Thomas.
         */
        encode: function (input) {
            var bi = BigInteger.fromByteArrayUnsigned(input);
            var chars = [];

            while (bi.compareTo(B58.base) >= 0) {
                var mod = bi.mod(B58.base);
                chars.unshift(B58.alphabet[mod.intValue()]);
                bi = bi.subtract(mod).divide(B58.base);
            }
            chars.unshift(B58.alphabet[bi.intValue()]);

            // Convert leading zeros too.
            for (var i = 0; i < input.length; i++) {
                if (input[i] == 0x00) {
                    chars.unshift(B58.alphabet[0]);
                } else break;
            }

            return chars.join('');
        },

        /**
         * Convert a base58-encoded string to a byte array.
         *
         * Written by Mike Hearn for BitcoinJ.
         *   Copyright (c) 2011 Google Inc.
         *
         * Ported to JavaScript by Stefan Thomas.
         */
        decode: function (input) {
            var bi = BigInteger.valueOf(0);
            var leadingZerosNum = 0;
            for (var i = input.length - 1; i >= 0; i--) {
                var alphaIndex = B58.alphabet.indexOf(input[i]);

                bi = bi.add(BigInteger.valueOf(alphaIndex).multiply(B58.base.pow(input.length - 1 -i)));

                // This counts leading zero bytes
                if (input[i] == "1") leadingZerosNum++;
                else leadingZerosNum = 0;
            }
            var bytes = bi.toByteArrayUnsigned();

            // Add leading zeros
            while (leadingZerosNum-- > 0) bytes.unshift(0);

            return bytes;
        }
    };

    // https://docs.omniref.com/js/npm/bitcore/0.1.6/symbols/BigInteger.fromByteArrayUnsigned
    BigInteger.fromByteArrayUnsigned = function (ba) {
      if (!ba.length) {
        return ba.valueOf(0);
      } else if (ba[0] & 0x80) {
        // Prepend a zero so the BigInteger class doesn't mistake this
        // for a negative integer.
        return new BigInteger([0].concat(ba));
      } else {
        return new BigInteger(ba);
      }
    };


    Waves.encryptWalletSeed = function (phrase, key) {
        var rkey = Waves.prepKey(key);
        return CryptoJS.AES.encrypt(phrase, rkey);
    }

    Waves.decryptWalletSeed = function (cipher, key, checksum) {
        var rkey = Waves.prepKey(key);
        var data = CryptoJS.AES.decrypt(cipher, rkey);

        if (converters.byteArrayToHexString(Waves.simpleHash(converters.hexStringToByteArray(data.toString()))) == checksum)
            return converters.hexStringToString(data.toString());
        else return false;
    }

    Waves.prepKey = function (key) {
        var rounds = 1000;
        var digest = key;
        for (var i = 0; i < rounds; i++) {
            digest = converters.byteArrayToHexString(Waves.simpleHash(digest));
        }
        return digest;
    }

    Waves.simpleHash = function (message) {
        Waves._hash.init();
        Waves._hash.update(message);
        return Waves._hash.getBytes();
    }


    return Waves;
}(Waves || {}, jQuery));