import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './BuyPage.css';
import  Product from "../Product/Product";
import GuttersGrid from './tst'


const item1={
  "productname":"abc",
  "imgsrc":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFRUXFxcXGBYYFxgXFxgXFxcXFxcVFxgYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPEA0QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABAEAACAQIEAwUFBgQFAwUAAAABAhEAAwQSITEFQVEGEyJhcQcygZGhFEJSscHRI3Lh8BUzYoKSJKLxFkNTVLL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgICAQMDBQAAAAAAAAAAAQIRAyESMUEEIlEyceETQlKRkv/aAAwDAQACEQMRAD8AInSZ3oXikd00vlGxO+/L40H2Zxme33ZPiXbzXl8qk4sjG2y5Z289jXZLcbOOOpUyTgV8vaWTqvhP6fSmgqr8Bv5Gg7HSPPl+tWYXgGy8zWEXo2kqZsK3nzrx1rUmqEmSKa9BrQGthSKs2LaViNWRWAUqHZsDXpasFamlQ7PCawtQPFuKWrABuNqdl2J61pw3j+Gu6Etb/wBbMpX0ga1LaQ0mw9WrRb0kidjFbMuuhBGhBGxB1BFCYPV7kcj9aZIWWmor5hZnTMF+u1S5KXXMSgtMM0nOTHP3twKLAa4gfcHME/Ij96nBO9J+H8TNy7BEDKcvzEz8qOvoxdCDosyOoI0oTBhveVuLlCGt1aqJJMRiQiljJHlvVDxmP768CxISQoHMLOmn1pl2l4qcuRdAdD6D9Ki7H4DvLyuQCtvxGebbKPhvQB0FHCrJ0AH5CqH2j4895yoJFtfdG0nq3nVk7TW8Q1oiwNtWMwYH4fOudYi4TuZPP1pJDbJu8rKGz1lFBZvw2+bbhxyPzHMVdAwdQ67GqXaWn3BcXkOVvdP0PWtU60YtXsG4naC3TlEaA9PjTjhV8OIb3lpbxjBsLmfdSBtsPSvcA8EHzrnumdFWiyZawrW9pgwkGtMQ2XcGOvStbMzwLXqa17W6CgDMtegVsK2UVNjNctalDuACeQOgJ5A9BRduzRFvByCdh12+AnnUtlJWcj7acPuW8U4e4jkmZExqJgTyoThmBZzGe2s82BP5VZ+1S3O9bw2nHuhmILEAQCY5xVWsO6v7oAnQqfdPx3FZNm6R0bgSsifZr0d4gzIQSRk18JnbyqfAWDLsR7x09Kh7N4hDhlN1y153NxupyjKqzz3Om1PLWHKjxCDvB0idQKadESWwYWoqs3rUsWAiSTVsx6xbJ66fOq+6RRYkiTguGEltJ2HXzMU1IqLh+VoCjVQZPXMf6Uaqj++vSqTJktivF3IYE7KrE/QUn4hxkqhGzEQBGvk3yNb8XZ3a4CQoU7HcjkB12mkGIQzJk+dPkHECvuzGTvV+7O4fuMMCwGY66bksfCPWSBSTs5wcXCXuL4RoAeZ60241xFrbhAIhcwPIEgjN5kCQB115VaIl8E3aTjL2rYtKw7xh4o5A7iqBdphirhYkkknqd6BuirSIsjisreKynQWEotF2qGFEoNqqiLHGFuh07pzAOzdK2xWBFoDn5kmflS601M7eIzp3bn+Vuh/aspwNYSolwMxKnUH3ecbz500tMHX86r9p2VtNCP7mj8Di8pMnQ71mmatB1qyVEHWpBUwMgEc68K1VmbNFqS+Mtm5cHvAeH1Akk/CPnWoU1B2hxYt4eCYkERzJb+lZ5JNVXlmmOKbd+BgLxW0rZSzMq6DqQKE4nj3W3kaz/ESGBUz6wN1g+Rml3BuJEzcvaogAVB1AgTVM7V4u/aumbrTuBJ8M65fhSuzWKUSHjnFGYkZSvLUa/Hzqv96xPvfU1s9+63j96dyP1r3KWEkBvIGPzp0DY97P4zLcTM06jnNdZ4ljEcJDSSoOxEj41x/hN3IfdCjyAzfM1Z8dxgspctBCoEH3pQ6H6mpfY6tFuxJzKBr1pddsdaJ4dxS3ft5re4HiHMefpUGJuTOtFkUecPxQtsxMRHxMchXly+7yiqTmM6bmfyFRpk3g6DUciek04slbNud7jCdNfy2FKworPEMMUYq2pG9DYTAm7cC8tzpyo9la4QB7xP8AZpvYRMOhE6nVjzJ8qcbbJk6Mv3FsqNNBoB5CqpxXGm45Y0ZxTGl2k/Kkd9q7Ixrs5nIhutQ7mt7hqE0xEute15NZQAStToKhAoi2KuiLJUom2agQVMtJoaYUkHf58xUgUoZHiEbxt604xgw1kohw7NNtGLC4QZYSYERUWOwotMpRibdxQ6E7wdCp8wdKxcFI1U2iPh14ga+7O87etMx5DWlS4cGSpyk9Nj6irBhsNks2j9na6zBsxDMAIaANB0rKUXHs0TUugcVSe12OzYgqDK2hAHLNlkk+lWy7ixblmBAB25/y61SeM4TNft257sXri5uejsJj5ms+zRaGfDsNlFlXaTl764fI6qPyqsdqL3e3GO8mrx23KWEZPs5t3GMI6uxBtpouedNRrpVFwNnPmY6jXX0qkimyuZmtHTY8qItcQE6yPTWrFwFcO95bV/Dd73lxFDd4Uyg6HQDXrQXavDYYXns2MN3Pd3HUt3jOXAMDQjSmICXFruLh/L5VqMRmPgB82O9K3w5Biru/CEXAYe8oh7neZzO+VoEDlQ6QKzTgmIfB4i1dMm04Gf0mCV/OPM10bGYayrZkDXFeGtxtlPLqao+MsC5wtbgHjw10EmP/AGnIVvkWB9KvnYTArdwYbM0o5CQYJUictZNeSrBHDsVtlVsproZEjnvuRQaqczW7bll+833asmNwSXLd1ihDLkgkk7kgiKS3HyjKNAOgitIYXIynkUTM6WRCAExE9fWlGNxBYyTJptgLKXS1s6Ow/htOmYfdPrQnEsGtq0iup75znImMlvYAj8TanyFdcIxhpHNKTltlexDUBdppjipYlVyjpvFL7i1dEWBuKiIollqIrSodm2X+5r2vclZSHYQtToahUVKla0ZWEJUw2qBDU6GihWWriOCF5rbrfsKvdW1OZ4IKrB0AofiuIRjbt2ySlpMgbbMZlmjpJpLbFF2alQKc7CrFWvCszWbIS6qkBswL5TJaRpVcwlqfgJ+VM7VsVE6NMdgPalLfcstzdtiNdV1mf186532YUX+JW1JburYZ2klsoUROvmRTXtXxs32NuxbZyJXRTMecaUP2awLYdHtyBfvx3jiD3Voe7bn8TEkn4DlXE3ts7YrRbuKKxtYpbt229l1y2FDhyHkZXHNIG9VbHYQWLB21AHn5/lTOxhgCA3htjRQdGc82NKOPi7iLhs2LT3AkyFUmPM0FUK+z1wDE2XYgAXFJJ2HiBJNRcbuq+LvFSCpu3DI2IkkEUHfzJKkFSNCCII+BofC2HYnIpZjsAJJ9AKYEA8VyPWrucUv2DC2wwLL32ZZ1EsImqVieHX7FxRetPaJ1AdSsjyplhTA86zkxpFn4Jic1q7h+TI2bpByoPzq0ez3iSLhFtW7qse81BPiAyb6bQRVD4Tcg3D/oj/uU/pSngvEvs+KY8kvNy3Acjl5U4sUjveOxqNZuTpcOSejQd/XWqpfo9r63FDoZVtQdvzoO6td8Fo4Mj2BbMDtBBn41L2muB8TeYHMC+h3BECIrS4tD3FrXj5M78C68tA3VpnfSgri06FYEy1EVop1qJhUtDszLWV7WVNDs2FSLUIapkNa0Z2TpUyVpbWiEWqoVktoUZZGtQ2UmjbVukwRvjMb9nNsxmViQw/0HeD1Ez8KsKpaZTrKkRvGnrVX4vg3ZCUUuwGig6nyWdJqTgfZl18eIuN1WyGML/Ow95vIaetebkclLbPTxKLjpHuLui2rWsPkRdoA8RPTNQVzhz27BynI/vNdIHyE7etOOI4i5YU5LK+TkqLaDqS2s1SeLcZYKTeuC4xPhVRA18uYrNbNG6BsJeKFrly4zkTqx58o6V0z2OcZsvh3tiO/7xmuD7xk+FupWIHlFcQ4jjTlg7nxEdOg+VbcDvXLbC7bYpcUyrDQiKa0Ls+gOM8Bw9/iWHW7aVgLF1yOTMGQDN+KJO9T8C4FYw/EMR3NtFm1bYCNFJLA5ekxQHBMddx1rD8Qw/d/aLQezdtvIR5y5gCJKGQrAwdyK17T8Vu8Ow+I4heNs4i6EtWraSUSJy6nVokkmOlMQD7bMZYGESy7K2I7xWQaZlA95j0BGnxFcesPrS2/jLl1mu3HLu7SzMZJNE4dvh1NRJWy1pD7g6+L+aR9CT9BHxqtWyDeZyuYd4TB5jMdKtnZu0WLvGi22Kj18C/8A6NIr2BKOykQQxnyIOtOqRLZ1XgS/9MhHuahTM6bgfCY+FTXBUHY66HwJ/ErCfT+2+lE3BXV6eVwOXMqkB3RQtwUa4oZ1rqRzMAurQdxKY3FoW6tWQAOtDXaNuCgroqGikzWaysisqSjxd6JtLUVi6VfIQgEaZz4WnlP3TRtllzHQr1U7j48x50o5o8qehywy42tkllKma4qxP0orDYbY7iteL8Ovsf4aF0EZco2G5BrP1OWca4GnpsUJXzDcKgIBGxo63apXwjFFClq6mUmYbXVuh5VYxh45ULLyVjeLi6OU3u0WO+3Z7RJto0FAYt5AYOYnSd9asfaHtVbWO6uNcN2SqzGVZ0n9/Kq12k4bbtveW3fM3J7wSpQa5soA1zac6pN1wp8LEnafIVxdnd0ix4zi9xlzXXdp+6zEx5Ur+2Et3h1jQT58hSw3WdgNzyFSXNIQaxqT/q/ptVUZhGcu0nUk0/tr3aDrFAcDwJdgeVMsSc1yACVTeBUSZcTp/sMx6ql+w7AMzK6qTuIho+lLvb9xFIsYZHDEM1xlBnLpA22rlOJxjFpUlY2IJB+Yoa45ZpJJPMkkk/E1UehPsIVPCvnJrfDCTA1JMCob93QDyppwGyArXXmANKaQrL12RwsgoOfdp/3A/kPrUPtJwPdYjOB4bgzfEaH9KddiMOQbIPvMTcb/AIkx8PCPhUvtX4cWsJdB9wkEeTc/pTYvIq9m2IXJdtzLMJA9J/erNcWudez7G93ilH4gVGn3mBA15DWfhXSXdCSEYNEbGT6mNpg1eB03EyzK6YDdFC3TG9OBhvAXgnkBpvG8nSKpnFMPiM7MxkjowmPQbVu8yToyWFtWNHFDXUqTh2HdV8ZmdRzgVNct10Rlas5pxp0Krtuhblqm9y1Q1y1VNEWL+6rKP7qsqaKsiSwGBQgEHy+o86XYvh1y0fC0oBIneOYp/h7VH3+GC8hRtJ2I3BrPPBS35NcE3H7FY4DxY22GeWT1jT9avI47a7vLbXMSM3i2H+37zVQeKcHuWbpWGKeEh401G07SNad9niiMpuHwuYLGYAE6T8q86bdcT0YKN2yZL4a4Q4BHpljoRHMEz8KvOTLaLN90GeUwP1EVyrifHUtYh1EG3OjwTGsiYqLjfEr+MXwYkx/pMDoZApRbQ5RTKP2gCXMQ5sq5zMTBAnU+RNa2OA3CwD+GRMc/6U0wXCr+HuC5aIdgDII0I6UZxDiBFvvWXK7EgCIk+Q6U7+Ar5K8bXcyNM50n8I/eosHhszACvdWJZjvTvh9kIuc78h+tV0StsMRu6XIo8R09KU8QxGWban1NGYm/3a5ifG2w6DqaTTHiOpNSlZTdGhrAtb21PvfAVlzTQb7Crok9wlg3LgA66+lWMrN1LKe6pBb4a6+n61rhcMMLYzt/mvoo6Ejb4DWmPBMFltd43vPJnnHX4k1XQHQexDZ77GPdtH5s6/saB9rXGktW7dmJdiW32UaTR/swXM+IJ/DbH1Ymqt7bcEVxNm8Yym2V3EggzJXeI51FiaFPYnCQ+dny5/CoVgWEjQMpGxOlXrhllcNcyMPC0H4RvVD7H/8AU4gJbBzSpYj3VRWDZieUxA8zV+7R8MuhWuK0hTIGsqDuPSnvtBrpnva7HiB72XkoECCNJbrtXPmutGYE6kj5Vau0ILKSzxraOWYEMN6TtaCKqaH+Idf5l01/2mpjpFMI4Nj3yMX9xeZ61YeF8QtX7TWmhb9vxJOhdOa+ZA1FVDBYrLnEZlJbSm3B3tXQtq6ji4i5luqDmEERmG5XWD61Sk+SZDiuLQya1Q9y1TVrdQXLVekpHmOIv7qso7u/KsosRDhU1qx8K4cziQNBzNKMDZk6mBzq2WLqLbBWSqg6cydvjXJ6rNKEW4q2dvpcSk/cD8RsLaty7JBga7a8z5VQseUuM3cqO5TwKx0DNuWQdKs3F8LisSwtPcRLWmZhvHMD8qScT7s2YUQiFkTeDG7HqTXn/qZZVyVHeoQj9JVbuBVmggE9RVc7T4ZsPegRDKCp1DAbESp61aFTL5wJNUzi7Pdus7achPQbAVtHszb0Q4HiN620q2fyMkV5jcXcuMDdbMyggDQATqdqhGmgqWzhubaD61dEWwvhGANw5mHhG/7Ubi8UqmW2GiqNz8eVRDHZUiYUbKNz60qdy7T15UiuiRma4xdthqegHIVCozNH9gURjLmVRaX1Y9T0rWMix95t/IUCZ49z5DQfqaZcCwMnvmHhXaaC4dhDdcADwjc+VNuOYwIosJpp4vJenqaYyK5iDib4/CJC/wAsyznzO3pVmuXfCegAUfrSHs/YyI10jUjT05Uxu6AL8TQ3oEX/ANmF8LcIJHjGX1O4/Kgfblw4EWL4WWBKE84OsfOl3Y/GHvkRT4u+QD4xVv8AbBhQ+ALmf4bq2m8TBrJPbHIp3smCoMRiSuS2lpULci05tep2+dW/hOINzOr3CJVy07k5efSBVZ9n2JRuH4i26kiUbwjWWaJ+BWtL2JC3H7ksRlYCR4pO+lE96HDSsBxnFE7p7cnVQJjcqdNxMRSY4zwgRsQZ9ARP1NFvgGIBIInqN6AZIMEVSoTQX30FShiRBNW/stdLIyHxFTmDZROWNRmHKeVVXg2EDkK7BBupPXz8jTO1cuW3yW7jJmkQDoLg5eh2+NNS4uyXG40W/JUT26I4biFvWlcaGIcfhcaEfrUr2q7YztWcUoNOhf3dZRndVlXyI4i2xf60VavmdzHypYhoi21NxQKTQ6s4gASZ0qqdpcSWiSACZA6CnN67CgcjqfQVUuJYoPc8hoK87K7n9j0sSrHb8izGX7hXLaCjN99zC/DrSV+FEgm7eDEfdQaT0nn60bxUOASQRqApBkT0E16bpVAijNcP0qUVSEboEOwUfWomuL7xk+XU0wxnDgstcclt46Uvs4U3G8IhR15VoiGRraa6Zj9h5U4tYVLFtnOrHRR59alw6JbETtqTSzGYzvDOyjal2HRCloe+1D++3Qf3pWX7+bTkKlw1vTNyG370xDR8YLVsIgGY/TzNL8BhDdeTqAZY9TUSguSxMLzPl0FNeF49E0A0G3mf1pDG11oy2xAiGbyH3R/fStrbAmlv2sQSOZkk7kmpMHdkzso+tJlIZdnccqXhd8UWrveNHRTEekV13tmovcPxAGoa0WHmIkGuA8NxLZrgBgEt+dd84ZbLYG2jbmwFP/D/AMUorbIk9HH/AGdYi4ov+OECpPQTcnTqZ/M1duzuGKW3xQA71HAGYGIbfTrVU7EoBYxVojUXNf8AaRH610TCYIjBXt8zhmEb+HY/OaTWyk/aVztL2jtXl0sHvpjeFUDrG5JqnYoPoZ+Ap7jrBtko2p3JPORNKL10RFSmW0b8Ncggz89RTrizC5ba8qZWEC4gOix7lwc8u48tKR4ZCCGIOWaZtjrWYZFJ0bMCTDCNRU75G7WJ47rZb+yaA2s64bugQCbiuzq56+I+E86cMKqvYjiZA7rvGCgkZDEFTz9RpVsuCurC9UedlW7IstZW0VlbmBW0t0RbWNemv9KIt4esxCxp8T+lTky8YsvFi5SSF3FTCkz5AdSd/gKq7LJA6mn/ABUFjFBW8PrXApHoSRXe0zuhtKBIIZgOczGalmHxOUSDrzP6Uf2xwl5LneeJrZUAdE6r5CZNVW7ieQNax2jNugu/eZ2iZJOtT94QuRNuZqDBkKMx58qwPcuMLdtSWYwqgaknkB1q0SaYq9Aif3oF7hP7Vaj7O8etm5iL1rurdtSzFyJ06Cqf3gotPoRJNehv6+laoJq+dhvZy/ELD3heFvLdyagmQFDE6ebAfOhugWyk32J2OnIVrbeKvvbH2bX8BYF7MLoDeNkBAQcpB1iedVCzw57wZ0UnIAXjkCYB+dIZGl2dzp0/rRlu9PpUF/hF+3cFp7Lq51ClSJEA6ddCNqjuXIWCQCdNOXU0qCwjgOJi5tzJmu89jeJC/h11lk8LdfKuAWMGVUXxD2w4RiPusRIDDlPI12D2VYxWN22JGisF5RtI86m1doOOimYG53PEsTYOzXSP+UgfVhXYOC28tlBmzb6npO1LeO9iMNdvHF5WF3ScpgNlMhiBuaNtL3dl2X8JmeTbSPKKTnspR0UftnDXiRGvTkBoBVet4bXbYU34k3jNPcHwwLhGkeJh3hnkB7o9I1/3UoptFTaTEWAtBrcfCl1qxF0AjqD5ggjSjsPicjQdjrTm5wE37JZSBdBlIOm8wx9KSTsvmlEr6WimS4u2oOvMdelWLHdoDaNnMRkZQzEe8RzHlVextvE2EBxFvTPAaRPUzGhG9Nl4Y963YuW0FwpdhjpOQ+ITOkRVPkutBicFL3pNbG//AKqwv4z/AMTWU2+zL/8AXH/FKyt/f8r+vyY8vT/wf+vwGWcKCNK0u8GzEkaE/KuG4ftjfnxEN6k/PTpT/C+0C+NMx9QxPxrGakwhUXplxxXD2DERrMaVGnC7k/5b/wDE/tVasds3DDO8AGQQNfWedWzg/tRtFwt9gUI/zAuUg+YnX4VjwkbckF4TgF59DbMHfMIEfGl/aP2eWHAXuxaffPbAGvn1q1n2h8NUScUu07N+1DnttgMQSLeISRHvSsz0zRNS+S2hJpumUyz7FmKNmxIDwMhA8MyZzKeWWNjvT/2cezgYS42Jv+K6GZbSmDkQGA5j77DXymr1w7G2zbX+Kh0/EP3piKbySaoyaSZVPaayjheKzTBtx01JEV8qqnKvo/2zcT/6cYMKR3wLG791Qh2I3JNfPLWYaAwbz/8ANbYehNE+EttyXMenXyr6e9nvBzhsBZtsgRyM7ga+JtTrzrg3Y/g925fswsqbiyQRoJE/Svp9VgAdKMj3QLSIr1lWUqwDKRBB1BB5GgOHdncLYH8LD200jRRqJmD11prFexUpjsHxOHUjMUVioMEgGNORr5E4iCblxiFWbjmBsJJ0A6V9hkV8nducF9nx+IskQBdYr/K3iH5x8KuNkvYBw624zKrwtwZGEaETIPqDqDXUvZ3cZMYLZP3WU9CV0/SuVYfFgAgb8qt3s244/wBvso8EsSAdpmSZ86JryOJ3omq/2kvBbZAIAO45knWfTSn7pVM7X4c58x2IAHXSZqZLRcXsqiKHuqGMAsJ9Jq2Y+09y26I2WRBjmOa+hikPC+GubqOAYDSSdoA/enfGcSbNolSJY5PMZgdYrXHSi2ZZLc0ij28OC0MN9qtvY/GB0I1lZB6ETofpSazh8zARyGtW3huAS0sIoWYJjmepqcSuRWV1EztDgxew7oROmYeo1oTstaFlu6UkpcthxOsMv9D9Kdok1WbHEES6uv8AktB0+6SVIHpINXl000Z4tpouNe0J/iVj/wCQV5V8kTxZ8yG7rUlu5HOhC1YHqTQa2cQNJJpnguILbOiK4PJhIqsC5W4umk0NMuqcYwsRcsA9ADIH61rav4G4P8t7TepI+lU4XaJsXAZMxHxpUVY5OVH8Lhh1Ej59a6Va7aYq9btOSFyaAroGOxnz8q5AmIFP8LxU9wtsCIYmZOs7CP1qXEEy1dsOI3MUsXmzFPcYSIndT1rm2Jw5VhVis4slHDOdtBv8+dKrS944HTrTiqCVNHTPYnwV3vHEMBktiNebHaPSu31ybsZx84LDqjKuUmTrrJ5yKt7dvMKEzeItp4ANdeYmNPOoe2KmWqsrm2O9qigxbsHTcu3L0XarT2P7U28dbLqMrKYZJmJ2PpRQUWGuOe2jsFfxFz7bh1Vgtv8AirMNCa5h10muxzWtxAQQRIIgjqDuKadCPjGxuPMVZ+wuGV+JYUMxTxyCOoBIHxoDtjwn7JjsRYGyXCV/kbxKfkaO7FW2biOEC796PlBJqn0NH0q67k+ZPoNTVA4ziS7Zm1/QbxV37R27hsXBaMNH/bPi+lc9vYK5E6nlPX0rGRpEsHByHSAIiP7mqx2+Rle1GzAjyBU/s30q2dksKwsnMpEtp6Ch+2eBzWVbmjqfnoa0X00Zv67KJg7rhc8SNtKv+CxAu20cc1A+I0NIMFgs4VBAltfSrdYw1u1bCqMqLt/fM0Y3TsMitURKtUPtkiW2uRr3nIRoY1mm/aLHuTCkqvymqniXn3tRtVSny0KEK2V/x9T8zWU57u3/AGKypsqjlh51k1vicOyHxCJ1HT5ioq0INprJrFWpFUcx9aAPAakL1KMOpiJHWToK9SwkwWPrsKBkVtTIA3NO8JgiB74J6efrQqFFPhgefM1PaxUuq6CTr5VLGhlj8EqWwcxZidY0HwoLhZHeCKzE3NYBkCRP6mhMG8XNeRoQM6xdsIUEuBA23pLikcaJqTp5x60oscYAMz86m/xsHePhpU0y9CTG3nBMmOvL4RTHsxx67g7q3rR9QfdYdG60ZxDGWr4AKjNHIa+RmkTWmWQwnoeXwq0I+j+yPa6zjrYKnLdA8VonUeY6irCWr5T4Rxu7hbqXVOVlMg9fLzFdI4V7YmMC+tvXorA/TSomvgmin+24Rxa5527X5GlHZrENYxWGxA2S4pP8p0P0M/CvPaF2hTHY976KVXKiCdzlGpj1NLjiRljfT0in+0F2fWd0hkJiQVn1kaUnbBAlVG3OuMcJ9puMRVXOGCqFIYSDGxpqfavihq1iyx8pGnoDWLxyNFJI7MxUCB8KqvHrDsG1JBiRy35Cqfgfa25b+LhFjqjmY8gRV64b2hweMX+DeSdJQkLcXyKn9KGpLsapiLCIyOunnUl+/caS5jXSn1zBAEkCev8ASgb/AA6Zl1A3BJO3oKEworvELIYZi/zqvY0DqCPSrRiMHbB8TE+m3wBFK8VYt5TlB6AmrQmI+6HlWUf9nT8X1r2mScnsY/KToCDup1FaO9uSe7G+0mKIbCINjJ5zW2VR0I6VrZAI2FB1t6j8J3Hp1odTB1GvQ0w7xR7unlH61l+HXxCDybn/AFoACa/IitM9ZcskSN/OoZoENLWJQDVJ+NRvfQ6qmUz1nSgg+lah6KGHjE671Hcvw8ig81e5qBB32qfKtftJoTPWuagdjwcYIEAAelD/AOIMYM7ailc1k0qCx1iOMuVCsFb1An50uuYgdINQVIuHZtR8zoKAsK4PgWxF9LKsAzk6mYEAsdvSnPEezFy2Ul1IZragiRPeEgGDqNQaTcPvth7i3kYF0JgESNQQZHPQmmR7Y4jNOWyRCwptgqpQkqyjkwJ3piGn+DYizbzolply3WkjPHdTKsDsTBijMbgQbeUhBeDFG7kNkDgSyNOkiCJU78qq47V4oBgLgAe21thG6uxYz5yTB5UWe22KIiUGuZiEAZ2gjM55mDQgYbxfh32UqHuKWMHKA0iQDMnQ70Lw3ANfv27Ke9cYKD0J5+XWpcX2ue6ALlu0SI8QQBjAjU0ZwbtItm4L6qodQQrACRIIPxg0hly7J8HvWnc3sSbTB3S3Ms7rbJlgJnLp9atSPiw7J3yG0FzLcNuSXOYtbCzGZQjE+lc04p27a5DAp3oBAdrYkAiCqncA0pu9ucWIJdDFy9ciNCb1vu3GXpBPxJo4pjto6rxW1dd4zK0yC5hFziB3Yk6t5CkPGsPesKGuoUDEgTzIAJgfEVSn9ouNaM3ckD3R3YhSPdYdGEb1BxTtrjL65bzrcA1XScpgSR0kL9TRxQuRZ/tgrKo3+M3PKvKXFlWiDnW7c69rKYjQ7V6eXpWVlAjS7Qdzc1lZQgNa8rKymIysrKygDK9rKygDBXprKygCSzuKPu86ysoGgNN/nUJrKygR4K9FZWUAbc6nsV7WUwDsJs9R4n/L+NZWUkUADaiLO/wNZWUCIKysrKAP/9k=",
  "price":"2000"
}

class BuyPage extends Component {
  componentDidMount() {
  
    var requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
      }
    };
    console.log(requestOptions);
    fetch('http://127.0.0.1:8080/buyproduct',requestOptions)
        .then(function(response) {
          return response.json();
      })
        .then(function(result) { 
          var item2=result[0];
          console.log(item2);
        }); 
         
    }
    render() {
      return (
      <div className="Buy">
        <div id="Games" className="banner">Games</div>
          <div className="grid-container">
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>    
        </div> 
        <div id="Books" className="banner" >Books</div>
            <div className="grid-container">
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>    
        </div> 
         <div id="Electronics" className="banner" >Electronics</div>
            <div className="grid-container">
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>    
        </div> 
         <div id="Stationary" className="banner" >Stationary</div>
            <div className="grid-container">
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>
            <Item itemdetails={item1}/>    
        </div> 

      </div>
      );
    }
  }

  class Item extends Component {
    constructor(props){
      super(props);
      this.productname=this.props.itemdetails.productname;
      console.log(props);
      this.imgsrc=this.props.itemdetails.imgsrc;
      this.price=this.props.itemdetails.price;
      }
    render() {
      return (
        <Router>
          <div style={{padding:'20px'}}>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Link to="/product"><div className="grid-item"><div> <img src={this.imgsrc}/></div><br/><br/><div>Product Name:{this.productname}</div><b>Price:{this.price}</b></div></Link>    
       <Route path="/product" component={Product} />

       </div>
      </Router>
      );
    }
  }
export default BuyPage