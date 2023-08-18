(()=>{"use strict";function t(l){if(1===l.length)return l;{const e=Math.ceil(l.length/2);let i=t(l.slice(0,e)),r=t(l.slice(e)),n=[];for(;i[0]||r[0];)i[0]<r[0]?(n.push(i[0]),i.shift()):r[0]<i[0]?(n.push(r[0]),r.shift()):i[0]==r[0]?(n.push(i[0]),n.push(r[0]),i.shift(),r.shift()):i[0]?r[0]||(n.push(i[0]),i.shift()):(n.push(r[0]),r.shift());return n}}class l{constructor(t){this.data=t,this.left=null,this.right=null}}function e(t){if(0===t.length)return null;{const i=Math.floor(t.length/2),r=new l(t[i]);return r.left=e(t.slice(0,i)),r.right=e(t.slice(i+1)),r}}const i=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&i(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.data}`),null!==t.left&&i(t.left,`${l}${e?"    ":"│   "}`,!0))};let r=new class{constructor(l){this.root=function(l){let i=t(l);return e([...new Set(i)])}(l)}insert(t){!function t(e,i){if(i<e.data&&null==e.left){const t=new l(i);e.left=t}else if(i>e.data&&null==e.right){const t=new l(i);e.right=t}else{if(i<e.data)return t(e.left,i);if(i>e.data)return t(e.right,i);if(i==e.data)return void console.log("value already in tree, try another value")}}(this.root,t)}delete(t){!function t(l,e){if(l.left&&l.left.data===e&&null===l.left.left&&null===l.left.right)l.left=null;else if(l.right&&l.right.data===e&&null===l.right.left&&null===l.right.right)l.right=null;else if(l.left&&l.left.data===e&&null!==l.left.left&&null===l.left.left.left&&null===l.left.left.right&&null===l.left.right)l.left=l.left.left;else if(l.left&&l.left.data===e&&null!==l.left.right&&null===l.left.right.left&&null===l.left.right.right&&null===l.left.left)l.left=l.left.right;else if(l.right&&l.right.data===e&&null!==l.right.left&&null===l.right.left.left&&null===l.right.left.right&&null===l.right.right)l.right=l.right.left;else if(l.right&&l.right.data===e&&null!==l.right.right&&null===l.right.right.left&&null===l.right.right.right&&null===l.right.left)l.right=l.right.right;else if(l.data===e&&null!==l.left&&null!==l.right){let t=l.right,e=t;for(;null!==t.left;)e=t,t=t.left;l.data=t.data,e.left=null}else{if(e>l.data&&null===l.right)return void console.log(`${e} not found, please try again`);if(e<l.data&&null===l.left)return void console.log(`${e} not found, please try again`);if(e<l.data)return t(l.left,e);if(e>l.data)return t(l.right,e)}}(this.root,t)}find(t){!function t(l,e){if(l.data===e)return console.log(l),l;if(e>l.data&&null===l.right)console.log(`${e} not found`);else{if(!(e<l.data&&null===l.left))return e>l.data?t(l.right,e):e<l.data?t(l.left,e):void 0;console.log(`${e} not found`)}}(this.root,t)}levelOrderRecursive(t){}levelOrderIterative(t){let l=[];for(l.push(this.root);0!==l.length;)t(l[0]),l[0].left&&l.push(l[0].left),l[0].right&&l.push(l[0].right),l.shift()}}([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]);r.insert(9),r.delete(323),i(r.root),r.find(6),r.find(1),r.levelOrderIterative((t=>console.log(t)))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sU0FBU0EsRUFBVUMsR0FDdEIsR0FBcUIsSUFBakJBLEVBQU1DLE9BQWMsT0FBT0QsRUFDMUIsQ0FDRCxNQUFNRSxFQUFPQyxLQUFLQyxLQUFLSixFQUFNQyxPQUFPLEdBSXBDLElBQUlJLEVBQWlCTixFQUZKQyxFQUFNTSxNQUFNLEVBQUdKLElBTTVCSyxFQUFrQlIsRUFGSkMsRUFBTU0sTUFBTUosSUFLMUJNLEVBQWMsR0FDbEIsS0FBT0gsRUFBZSxJQUFNRSxFQUFnQixJQUNwQ0YsRUFBZSxHQUFLRSxFQUFnQixJQUNwQ0MsRUFBWUMsS0FBS0osRUFBZSxJQUNoQ0EsRUFBZUssU0FDUkgsRUFBZ0IsR0FBS0YsRUFBZSxJQUMzQ0csRUFBWUMsS0FBS0YsRUFBZ0IsSUFDakNBLEVBQWdCRyxTQUdUTCxFQUFlLElBQU1FLEVBQWdCLElBQzVDQyxFQUFZQyxLQUFLSixFQUFlLElBQ2hDRyxFQUFZQyxLQUFLRixFQUFnQixJQUNqQ0YsRUFBZUssUUFDZkgsRUFBZ0JHLFNBRVJMLEVBQWUsR0FHZkUsRUFBZ0IsS0FDeEJDLEVBQVlDLEtBQUtKLEVBQWUsSUFDaENBLEVBQWVLLFVBSmZGLEVBQVlDLEtBQUtGLEVBQWdCLElBQ2pDQSxFQUFnQkcsU0FNeEIsT0FBT0YsQ0FDWCxDQUNKLENDcENBLE1BQU1HLEVBQ0YsV0FBQUMsQ0FBWUMsR0FDUkMsS0FBS0MsS0FBTUYsRUFDWEMsS0FBS0UsS0FBTyxLQUNaRixLQUFLRyxNQUFRLElBQ2pCLEVBa0tKLFNBQVNDLEVBQW1CbEIsR0FDeEIsR0FBcUIsSUFBakJBLEVBQU1DLE9BQ04sT0FBTyxLQUNKLENBQ0gsTUFBTWtCLEVBQWNoQixLQUFLaUIsTUFBTXBCLEVBQU1DLE9BQU8sR0FDdENvQixFQUFPLElBQUlWLEVBQUtYLEVBQU1tQixJQUk1QixPQUZBRSxFQUFLTCxLQUFPRSxFQUFtQmxCLEVBQU1NLE1BQU0sRUFBR2EsSUFDOUNFLEVBQUtKLE1BQVFDLEVBQW1CbEIsRUFBTU0sTUFBTWEsRUFBYyxJQUNuREUsQ0FDWCxDQUNKLENDdExPLE1BQU1DLEVBQWMsQ0FBQ0MsRUFBTUMsRUFBUyxHQUFJQyxHQUFTLEtBQ3pDLE9BQVRGLElBR2UsT0FBZkEsRUFBS04sT0FDUEssRUFBWUMsRUFBS04sTUFBTyxHQUFHTyxJQUFTQyxFQUFTLE9BQVMsVUFBVSxHQUVsRUMsUUFBUUMsSUFBSSxHQUFHSCxJQUFTQyxFQUFTLE9BQVMsU0FBU0YsRUFBS1IsUUFDdEMsT0FBZFEsRUFBS1AsTUFDUE0sRUFBWUMsRUFBS1AsS0FBTSxHQUFHUSxJQUFTQyxFQUFTLE9BQVMsVUFBVSxHQUNqRSxFQ0ZGLElBQUlHLEVBQVUsSUZHUCxNQUNILFdBQUFoQixDQUFZWixHQUNSYyxLQUFLTyxLQXdKYixTQUFtQnJCLEdBQ1gsSUFBSTZCLEVBQWM5QixFQUFVQyxHQUU1QixPQUFPa0IsRUFEaUIsSUFBSyxJQUFJWSxJQUFJRCxJQUU3QyxDQTVKb0JFLENBQVUvQixFQUMxQixDQUdBLE1BQUFnQyxDQUFPbkIsSUFDSCxTQUFTb0IsRUFBa0JWLEVBQU1WLEdBQzdCLEdBQUlBLEVBQVFVLEVBQUtSLE1BQXFCLE1BQWJRLEVBQUtQLEtBQWMsQ0FDeEMsTUFBTWtCLEVBQVUsSUFBSXZCLEVBQUtFLEdBQ3pCVSxFQUFLUCxLQUFPa0IsQ0FFaEIsTUFBTyxHQUFJckIsRUFBUVUsRUFBS1IsTUFBc0IsTUFBZFEsRUFBS04sTUFBZSxDQUNoRCxNQUFNaUIsRUFBVSxJQUFJdkIsRUFBS0UsR0FDekJVLEVBQUtOLE1BQVFpQixDQUVqQixLQUFPLElBQUlyQixFQUFRVSxFQUFLUixLQUNwQixPQUFPa0IsRUFBa0JWLEVBQUtQLEtBQU1ILEdBRWpDLEdBQUlBLEVBQVFVLEVBQUtSLEtBQ3BCLE9BQU9rQixFQUFrQlYsRUFBS04sTUFBT0osR0FFbEMsR0FBSUEsR0FBU1UsRUFBS1IsS0FFckIsWUFEQVcsUUFBUUMsSUFBSSwyQ0FFaEIsQ0FDSixDQUNBTSxDQUFrQm5CLEtBQUtPLEtBQU1SLEVBQ2pDLENBRUEsT0FBT0EsSUFDSCxTQUFTb0IsRUFBa0JWLEVBQU1WLEdBSTdCLEdBQUlVLEVBQUtQLE1BQVFPLEVBQUtQLEtBQUtELE9BQVNGLEdBQTRCLE9BQW5CVSxFQUFLUCxLQUFLQSxNQUFxQyxPQUFwQk8sRUFBS1AsS0FBS0MsTUFDOUVNLEVBQUtQLEtBQU8sVUFFWCxHQUFJTyxFQUFLTixPQUFTTSxFQUFLTixNQUFNRixPQUFTRixHQUE2QixPQUFwQlUsRUFBS04sTUFBTUQsTUFBc0MsT0FBckJPLEVBQUtOLE1BQU1BLE1BQ3ZGTSxFQUFLTixNQUFRLFVBR1osR0FBSU0sRUFBS1AsTUFBUU8sRUFBS1AsS0FBS0QsT0FBU0YsR0FBNEIsT0FBbkJVLEVBQUtQLEtBQUtBLE1BQXlDLE9BQXhCTyxFQUFLUCxLQUFLQSxLQUFLQSxNQUM1RCxPQUF6Qk8sRUFBS1AsS0FBS0EsS0FBS0MsT0FBc0MsT0FBcEJNLEVBQUtQLEtBQUtDLE1BQzFDTSxFQUFLUCxLQUFPTyxFQUFLUCxLQUFLQSxVQUV6QixHQUFJTyxFQUFLUCxNQUFRTyxFQUFLUCxLQUFLRCxPQUFTRixHQUE2QixPQUFwQlUsRUFBS1AsS0FBS0MsT0FBMkMsT0FBekJNLEVBQUtQLEtBQUtDLE1BQU1ELE1BQzdELE9BQTFCTyxFQUFLUCxLQUFLQyxNQUFNQSxPQUFxQyxPQUFuQk0sRUFBS1AsS0FBS0EsS0FDM0NPLEVBQUtQLEtBQU9PLEVBQUtQLEtBQUtDLFdBRXpCLEdBQUlNLEVBQUtOLE9BQVNNLEVBQUtOLE1BQU1GLE9BQVNGLEdBQTZCLE9BQXBCVSxFQUFLTixNQUFNRCxNQUEwQyxPQUF6Qk8sRUFBS04sTUFBTUQsS0FBS0EsTUFDL0QsT0FBMUJPLEVBQUtOLE1BQU1ELEtBQUtDLE9BQXVDLE9BQXJCTSxFQUFLTixNQUFNQSxNQUM1Q00sRUFBS04sTUFBUU0sRUFBS04sTUFBTUQsVUFFM0IsR0FBSU8sRUFBS04sT0FBU00sRUFBS04sTUFBTUYsT0FBU0YsR0FBOEIsT0FBckJVLEVBQUtOLE1BQU1BLE9BQTRDLE9BQTFCTSxFQUFLTixNQUFNQSxNQUFNRCxNQUNoRSxPQUEzQk8sRUFBS04sTUFBTUEsTUFBTUEsT0FBc0MsT0FBcEJNLEVBQUtOLE1BQU1ELEtBQzdDTyxFQUFLTixNQUFRTSxFQUFLTixNQUFNQSxXQU0zQixHQUFJTSxFQUFLUixPQUFTRixHQUF1QixPQUFkVSxFQUFLUCxNQUFnQyxPQUFmTyxFQUFLTixNQUFnQixDQUN2RSxJQUFJa0IsRUFBT1osRUFBS04sTUFDWm1CLEVBQWFELEVBQ2pCLEtBQXFCLE9BQWRBLEVBQUtuQixNQUNSb0IsRUFBYUQsRUFDYkEsRUFBT0EsRUFBS25CLEtBRWhCTyxFQUFLUixLQUFPb0IsRUFBS3BCLEtBQ2pCcUIsRUFBV3BCLEtBQU8sSUFDdEIsS0FFSyxJQUFJSCxFQUFRVSxFQUFLUixNQUF1QixPQUFmUSxFQUFLTixNQUUvQixZQURBUyxRQUFRQyxJQUFJLEdBQUdkLGlDQUdkLEdBQUlBLEVBQVFVLEVBQUtSLE1BQXNCLE9BQWRRLEVBQUtQLEtBRS9CLFlBREFVLFFBQVFDLElBQUksR0FBR2QsaUNBR2QsR0FBSUEsRUFBUVUsRUFBS1IsS0FDbEIsT0FBT2tCLEVBQWtCVixFQUFLUCxLQUFNSCxHQUNqQyxHQUFLQSxFQUFRVSxFQUFLUixLQUNyQixPQUFPa0IsRUFBa0JWLEVBQUtOLE1BQU9KLEVBQ3pDLENBQ0osQ0FDQW9CLENBQWtCbkIsS0FBS08sS0FBTVIsRUFDakMsQ0FFQSxJQUFBd0IsQ0FBS3hCLElBQ0QsU0FBU29CLEVBQWtCVixFQUFNVixHQUM3QixHQUFJVSxFQUFLUixPQUFTRixFQUVkLE9BREFhLFFBQVFDLElBQUlKLEdBQ0xBLEVBR04sR0FBSVYsRUFBUVUsRUFBS1IsTUFBdUIsT0FBZlEsRUFBS04sTUFDL0JTLFFBQVFDLElBQUksR0FBR2QsbUJBRGQsQ0FJQSxLQUFJQSxFQUFRVSxFQUFLUixNQUFzQixPQUFkUSxFQUFLUCxNQUk5QixPQUFJSCxFQUFRVSxFQUFLUixLQUNYa0IsRUFBa0JWLEVBQUtOLE1BQU9KLEdBRWhDQSxFQUFRVSxFQUFLUixLQUNYa0IsRUFBa0JWLEVBQUtQLEtBQU1ILFFBRG5DLEVBTkRhLFFBQVFDLElBQUksR0FBR2QsY0FRbkIsQ0FDSixDQUNBb0IsQ0FBa0JuQixLQUFLTyxLQUFNUixFQUNqQyxDQUVBLG1CQUFBeUIsQ0FBb0JDLEdBeUJwQixDQUVBLG1CQUFBQyxDQUFvQkQsR0FDaEIsSUFBSUUsRUFBUSxHQUVaLElBREFBLEVBQU1oQyxLQUFLSyxLQUFLTyxNQUNRLElBQWpCb0IsRUFBTXhDLFFBQ1RzQyxFQUFlRSxFQUFNLElBQ2pCQSxFQUFNLEdBQUd6QixNQUFNeUIsRUFBTWhDLEtBQUtnQyxFQUFNLEdBQUd6QixNQUNuQ3lCLEVBQU0sR0FBR3hCLE9BQU93QixFQUFNaEMsS0FBS2dDLEVBQU0sR0FBR3hCLE9BQ3hDd0IsRUFBTS9CLE9BRWQsR0U5SmMsQ0FBQyxFQUFHLEVBQUcsRUFBRyxHQUFJLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsR0FBSSxLQUFNLE1BTy9Ea0IsRUFBUUksT0FBTyxHQUdmSixFQUFRYyxPQUFPLEtBQ2ZwQixFQUFZTSxFQUFRUCxNQUVwQk8sRUFBUVMsS0FBSyxHQUNiVCxFQUFRUyxLQUFLLEdBRWJULEVBQVFZLHFCQUFxQmpCLEdBQVNHLFFBQVFDLElBQUlKLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmFsYW5jZWQtYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly90b3AtYmFsYW5jZWQtYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL2JpbmFyeVNlYXJjaFRyZWUuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9wcmV0dHlQcmludC5qcyIsIndlYnBhY2s6Ly90b3AtYmFsYW5jZWQtYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwoYXJyYXkubGVuZ3RoLzIpXG4gICAgICAgIC8vIHNwbGl0IGFycmF5IGluIGhhbGZcbiAgICAgICAgY29uc3QgbGVmdEhhbGYgPSBhcnJheS5zbGljZSgwLCBoYWxmKVxuICAgICAgICAvLyBjYWxsIG1lcmdlU29ydCBvbiB0aGUgbGVmdCBoYWxmXG4gICAgICAgIGxldCBzb3J0ZWRMZWZ0SGFsZiA9IG1lcmdlU29ydChsZWZ0SGFsZilcblxuICAgICAgICBjb25zdCByaWdodEhhbGYgPSBhcnJheS5zbGljZShoYWxmKVxuICAgICAgICAvLyBjYWxsIG1lcmdlU29ydCBvbiB0aGUgcmlnaHQgaGFsZlxuICAgICAgICBsZXQgc29ydGVkUmlnaHRIYWxmID0gbWVyZ2VTb3J0KHJpZ2h0SGFsZik7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBlbGVtZW50IGluIGxlZnQgaGFsZiBhbmQgcmlnaHQgaGFsZiwgc2VlIHdoaWNoIGlzIHNtYWxsZXJcbiAgICAgICAgbGV0IG1lcmdlZEFycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChzb3J0ZWRMZWZ0SGFsZlswXSB8fCBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgIGlmIChzb3J0ZWRMZWZ0SGFsZlswXSA8IHNvcnRlZFJpZ2h0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkTGVmdEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkTGVmdEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0ZWRSaWdodEhhbGZbMF0gPCBzb3J0ZWRMZWZ0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkUmlnaHRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZFJpZ2h0SGFsZi5zaGlmdCgpXG5cbiAgICAgICAgICAgICAgICAvLyBlZGdlIGNhc2Ugd2hlcmUgdGhlIHNhbWUgbnVtYmVyIGlzIGJlaW5nIGNvbXBhcmVkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRlZExlZnRIYWxmWzBdID09IHNvcnRlZFJpZ2h0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkTGVmdEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRSaWdodEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkTGVmdEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgICAgIHNvcnRlZFJpZ2h0SGFsZi5zaGlmdCgpXG4gICAgICAgICAgICAgICAgLy8gZWRnZSBjYXNlIHdoZXJlIG9uZSBhcnJheSBpcyBlbXB0eVxuICAgICAgICAgICAgfSBlbHNlIGlmICghc29ydGVkTGVmdEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZFJpZ2h0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICghc29ydGVkUmlnaHRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRMZWZ0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRMZWZ0SGFsZi5zaGlmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXJnZWRBcnJheTtcbiAgICB9XG59IiwiaW1wb3J0IHsgbWVyZ2VTb3J0IH0gZnJvbSBcIi4vbWVyZ2VTb3J0XCI7XG5cbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vcHJldHR5UHJpbnRcIjtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG4gICAgfVxuXG5cbiAgICBpbnNlcnQodmFsdWUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbmV3Tm9kZTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBuZXdOb2RlO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCwgdmFsdWUpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodCwgdmFsdWUpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBhbHJlYWR5IGluIHRyZWUsIHRyeSBhbm90aGVyIHZhbHVlXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290LCB2YWx1ZSlcbiAgICB9XG5cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29kZSByZXF1aXJlcyBndWFyZCBjbGF1c2U6IGlmKG5vZGUubGVmdCksIG9yIGlmKG5vZGUucmlnaHQpXG4gICAgICAgICAgICAvLyBjb25zaWRlciBhdCBsZWFzdCA0IGNhc2VzXG4gICAgICAgICAgICAvLyBDYXNlIDE6IGRlbGV0aW5nIHRoZSBsZWFmIG5vZGVcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgJiYgbm9kZS5sZWZ0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdC5sZWZ0ID09PSBudWxsICYmIG5vZGUubGVmdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0ICYmIG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc2UgMjogZGVsZXRpbmcgYSBicmFuY2ggbm9kZSB3aXRoIG9uZSBsZWFmOyBwb2ludCB0aGUgcHJlY2VkaW5nIGNoaWxkIHRvIHRoZSAybmQgZm9sbG93aW5nIGNoaWxkXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgJiYgbm9kZS5sZWZ0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdC5sZWZ0ICE9PSBudWxsICYmIG5vZGUubGVmdC5sZWZ0LmxlZnQgPT09IG51bGwgXG4gICAgICAgICAgICAgICAgJiYgbm9kZS5sZWZ0LmxlZnQucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG5vZGUubGVmdC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgJiYgbm9kZS5sZWZ0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdC5yaWdodCAhPT0gbnVsbCAmJiBub2RlLmxlZnQucmlnaHQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLmxlZnQucmlnaHQucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LnJpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0ICYmIG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQubGVmdC5sZWZ0ID09PSBudWxsIFxuICAgICAgICAgICAgICAgICYmIG5vZGUucmlnaHQubGVmdC5yaWdodCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LmxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQgJiYgbm9kZS5yaWdodC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLnJpZ2h0LnJpZ2h0ICE9PSBudWxsICYmIG5vZGUucmlnaHQucmlnaHQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLnJpZ2h0LnJpZ2h0LnJpZ2h0ID09PSBudWxsICYmIG5vZGUucmlnaHQubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5yaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogZWRnZSBjYXNlIHdoZXJlIHJvb3QgaXMgaGFzIG9uZSBsZWFmICh0d28gbm9kZXMgb25seSBpbiB0aGUgdHJlZSlcbiAgICAgICAgICAgIC8vIHJlcXVpcmVzIGNoZWNraW5nIGlmIG5vZGUgaXMgcm9vdCwgYW5kIGNoZWNraW5nIGlmIGl0IG9ubHkgaGFzIG9uZSBsZWFmXG5cbiAgICAgICAgICAgIC8vIENhc2UgMzogZGVsZXRpbmcgYSBicmFuY2ggd2l0aCBib3RoIGxlYXZlczsgZ2V0IHRoZSBuZXh0IHJpZ2h0LCB0aGVuIGxlZnRtb3N0IGkgdGhpbmtcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBQYXJlbnQgPSB0ZW1wO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFBhcmVudCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSB0ZW1wLmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHRlbXAuZGF0YTtcbiAgICAgICAgICAgICAgICB0ZW1wUGFyZW50LmxlZnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzZSA0OiBjb25zb2xlIGxvZyBpZiB0aGUgdmFsdWUgaXNuJ3QgZm91bmRcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2YWx1ZX0gbm90IGZvdW5kLCBwbGVhc2UgdHJ5IGFnYWluYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsdWV9IG5vdCBmb3VuZCwgcGxlYXNlIHRyeSBhZ2FpbmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB2YWx1ZSA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0LCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QsIHZhbHVlKVxuICAgIH1cblxuICAgIGZpbmQodmFsdWUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB2YWx1ZSBleGlzdHMgYXQgbGVhZiBvciB0aGUgbGVhZiBwYXJlbnRzXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsdWV9IG5vdCBmb3VuZGApXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2YWx1ZX0gbm90IGZvdW5kYClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCwgdmFsdWUpXG4gICAgfVxuXG4gICAgbGV2ZWxPcmRlclJlY3Vyc2l2ZShoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAvLyBUaGVyZSBuZWVkcyB0byBiZSBzb21lIHNvcnQgb2YgcXVldWUsIEkgdGhpbmsgaXQgbmVlZHMgdG8gYmUgaW5zaWRlIHRoZSBmdW5jdGlvblxuICAgICAgICAgICAgLy8gYmFzZSBjYXNlOiBpZiB0aGUgbGVhZiBicmFuY2hlcyBhcmUgcmVhY2hlZD9cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgfHwgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGNoYWluLCBvbmUgdGhhdCBjb250aW51b3VzbHkgYWRkcyBhbmQgZGVsZXRlcyBub2Rlc1xuICAgICAgICAgICAgICAgIGxldCBxdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZSlcbiAgICAgICAgICAgICAgICBoZWxwZXJGdW5jdGlvbihub2RlKVxuICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcXVldWUucHVzaChub2RlLnJpZ2h0KVxuXG4gICAgICAgICAgICAgICAgLy8gYWxzbyB0cmF2ZXJzZSBkb3duIHRoZSBjaGFpblxuICAgICAgICAgICAgICAgIC8vIGdvIGxlZnQ/IGdvIHJpZ2h0P1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbigpXG4gICAgICAgICAgICAgICAgLy8gZG8gaSBuZWVkIHRvIGhhdmUgcmVjdXJpc3ZlRnVuY3Rpb24gcmV0dXJuIHRvIHRoZSBxdWV1ZT9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmVjdXJzaXZlXG4gICAgICAgICAgICAvLyBtYXkgaGF2ZSB0byBzZXQgcm9vdCwgYW5kIGdldCB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgdmFsdWUgdG8gYSBxdWV1ZSwgdGFrZSBpdCBvdXQsIGFuZCB0aGVuIGFkZCB0aGUgY2hpbGRyZW4gdG8gYSBxdWV1ZT9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldmVsT3JkZXJJdGVyYXRpdmUoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gW11cbiAgICAgICAgcXVldWUucHVzaCh0aGlzLnJvb3QpXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGhlbHBlckZ1bmN0aW9uKHF1ZXVlWzBdKVxuICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLmxlZnQpIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdClcbiAgICAgICAgICAgIGlmIChxdWV1ZVswXS5yaWdodCkgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodClcbiAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgICAgIGxldCBzb3J0ZWRBcnJheSA9IG1lcmdlU29ydChhcnJheSlcbiAgICAgICAgbGV0IHJlbW92ZWREdXBsaWNhdGVzID0gWy4uLiBuZXcgU2V0KHNvcnRlZEFycmF5KV1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUJ1aWxkVHJlZShyZW1vdmVkRHVwbGljYXRlcylcbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5KSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gd2hhdCBkbyBpIG5lZWQgdG8gcmV0dXJuPyBhcnJheT8gbm9kZT9cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoLzIpXG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShhcnJheVttaWRkbGVJbmRleF0pXG5cbiAgICAgICAgcm9vdC5sZWZ0ID0gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KSlcbiAgICAgICAgcm9vdC5yaWdodCA9IHJlY3Vyc2l2ZUJ1aWxkVHJlZShhcnJheS5zbGljZShtaWRkbGVJbmRleCArIDEpKVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydCh2YWx1ZSkge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IG5ld05vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEgJiYgbm9kZS5yaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgbm9kZS5yaWdodCA9IG5ld05vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQpXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGUsIG1ha2UgaXQgdGhlIGNoaWxkIG9mIHRoZSBwcmV2aW91cyBub2RlLCBhbmQgdGhlIG5ldyByb290IG9mIHRoZSBuZXh0IG5vZGVzXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0KVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBhbHJlYWR5IGluIHRyZWUsIHRyeSBhbm90aGVyIHZhbHVlXCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWN1cnNpdmVGdW5jdGlvbigpXG59IiwiZXhwb3J0IGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgfVxufTsiLCIvLyBpbXBvcnQgeyBOb2RlLCBUcmVlLCBidWlsZFRyZWUgfSBmcm9tIFwiLi9iaW5hcnlTZWFyY2hUcmVlXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vYmluYXJ5U2VhcmNoVHJlZVwiO1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9wcmV0dHlQcmludFwiO1xuXG5jb25zdCB0ZXN0QXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdXG5cblxuLy8gYnVpbGRUcmVlKHRlc3RBcnJheSlcbmxldCBuZXdUcmVlID0gbmV3IFRyZWUodGVzdEFycmF5KVxuLy8gcHJldHR5UHJpbnQobmV3VHJlZS5yb290KVxuXG5uZXdUcmVlLmluc2VydCg5KVxuLy8gcHJldHR5UHJpbnQobmV3VHJlZS5yb290KVxuXG5uZXdUcmVlLmRlbGV0ZSgzMjMpXG5wcmV0dHlQcmludChuZXdUcmVlLnJvb3QpXG5cbm5ld1RyZWUuZmluZCg2KVxubmV3VHJlZS5maW5kKDEpXG5cbm5ld1RyZWUubGV2ZWxPcmRlckl0ZXJhdGl2ZSgobm9kZSkgPT4gY29uc29sZS5sb2cobm9kZSkpIl0sIm5hbWVzIjpbIm1lcmdlU29ydCIsImFycmF5IiwibGVuZ3RoIiwiaGFsZiIsIk1hdGgiLCJjZWlsIiwic29ydGVkTGVmdEhhbGYiLCJzbGljZSIsInNvcnRlZFJpZ2h0SGFsZiIsIm1lcmdlZEFycmF5IiwicHVzaCIsInNoaWZ0IiwiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0aGlzIiwiZGF0YSIsImxlZnQiLCJyaWdodCIsInJlY3Vyc2l2ZUJ1aWxkVHJlZSIsIm1pZGRsZUluZGV4IiwiZmxvb3IiLCJyb290IiwicHJldHR5UHJpbnQiLCJub2RlIiwicHJlZml4IiwiaXNMZWZ0IiwiY29uc29sZSIsImxvZyIsIm5ld1RyZWUiLCJzb3J0ZWRBcnJheSIsIlNldCIsImJ1aWxkVHJlZSIsImluc2VydCIsInJlY3Vyc2l2ZUZ1bmN0aW9uIiwibmV3Tm9kZSIsInRlbXAiLCJ0ZW1wUGFyZW50IiwiZmluZCIsImxldmVsT3JkZXJSZWN1cnNpdmUiLCJoZWxwZXJGdW5jdGlvbiIsImxldmVsT3JkZXJJdGVyYXRpdmUiLCJxdWV1ZSIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=