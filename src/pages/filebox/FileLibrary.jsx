import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Checkbox,
  Button,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  LinearProgress,
  Avatar,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
  Snackbar,
  Alert,
  Modal,
  Input,
  IconButton,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "@components/common/Slidbar/Slidbar";

const FileLibrary = () => {
  const [userInfo] = useState({
    name: "홍길동",
    avatar: "https://via.placeholder.com/40",
  });

  const [data, setData] = useState([
    {
      id: 1,
      name: "관리폴더",
      type: "folder",
      contents: [],
      size: "0MB",
      uploaded: "-",
      uploader: "Uploader1",
    },
    {
      id: 2,
      name: "새폴더",
      type: "folder",
      contents: [],
      size: "0MB",
      uploaded: "-",
      uploader: "Uploader2",
    },
  ]);
  const [trash, setTrash] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentView, setCurrentView] = useState("main");
  const [contextMenu, setContextMenu] = useState({ mouseX: null, mouseY: null, item: null });
  const [draggingItem, setDraggingItem] = useState(null);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const totalStorage = 10 * 1024; // 10GB in MB
  const usedStorage = data.reduce((total, item) => {
    const sizeInMB = item.size.endsWith("MB") ? parseFloat(item.size) : 0;
    return total + sizeInMB;
  }, 0);
  const usedPercentage = ((usedStorage / totalStorage) * 100).toFixed(2);

  const handleNewFolder = () => { // 새 폴더 생성 기능
    const newFolder = {
      id: Date.now(),
      name: "새폴더",
      type: "folder",
      contents: [],
      size: "0MB",
      uploaded: new Date().toISOString().split("T")[0],
      uploader: userInfo.name,
    };

    setData((prevData) => [...prevData, newFolder]);

    setTimeout(() => {
      const newName = prompt("새 폴더 이름을 입력하세요", "새폴더");
      if (newName) {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === newFolder.id ? { ...item, name: newName } : item
          )
        );
      }
    }, 100);
  };

  const handleSearch = () => { // 파일 검색 기능
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(result);
  };

  const handleDelete = () => { // 선택된 파일 삭제 기능
    const itemsToDelete = data.filter((item) => checkedItems.includes(item.id));
    setTrash((prevTrash) => [...prevTrash, ...itemsToDelete.map((item) => ({ ...item, deletedDate: new Date().toISOString().split("T")[0] }))]);
    setData((prevData) => prevData.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
    setSnackbar({ open: true, message: "파일이 삭제되었습니다.", severity: "warning" });
  };

  const handleRestore = () => { // 휴지통에서 파일 복원 기능
    const restoredItems = trash.filter((item) => checkedItems.includes(item.id));
    setTrash((prevTrash) => prevTrash.filter((item) => !checkedItems.includes(item.id)));
    setData((prevData) => [...prevData, ...restoredItems]);
    setCheckedItems([]);
    setSnackbar({ open: true, message: "파일이 복원되었습니다.", severity: "success" });
  };

  const handleEmptyTrash = () => { // 휴지통 비우기 기능
    if (window.confirm("휴지통을 비우시겠습니까?")) {
      setTrash([]);
      setSnackbar({ open: true, message: "휴지통이 비워졌습니다.", severity: "info" });
    }
  };

  // 드래그앤드롭 및 파일 이동
  const handleDragStart = (item) => setDraggingItem(item); // 파일 드래그 시작 기능

  const handleDrop = (e, targetFolder) => { // 파일을 폴더로 드래그하여 이동하는 기능
    e.preventDefault();
    if (draggingItem && targetFolder.type === "folder") {
      setData((prevData) =>
        prevData.map((dataItem) => {
          if (dataItem.id === targetFolder.id) {
            const updatedFolder = { ...dataItem, contents: [...dataItem.contents, draggingItem] };
            return { ...updatedFolder, size: calculateFolderSize(updatedFolder) };
          }
          return dataItem.id === draggingItem.id ? null : dataItem;
        }).filter(Boolean)
      );
      setDraggingItem(null);
      setSnackbar({ open: true, message: "파일이 이동되었습니다.", severity: "info" });
    }
  };

  const handleUploadClick = () => { // 업로드 모달 열기
    setUploadModalOpen(true);
  };

  const handleUploadFiles = (e) => { // 업로드 모달에서 파일 업로드 기능
    const files = Array.from(e.target.files);
    const uploadedFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: "file",
      size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
      uploaded: new Date().toISOString().split("T")[0],
      uploader: userInfo.name,
    }));
    if (currentFolder) {
      setData((prev) =>
        prev.map((item) => {
          if (item.id === currentFolder.id) {
            const updatedFolder = { ...item, contents: [...item.contents, ...uploadedFiles] };
            return { ...updatedFolder, size: calculateFolderSize(updatedFolder) };
          }
          return item;
        })
      );
    } else {
      setData((prev) => [...prev, ...uploadedFiles]);
    }
    setSnackbar({ open: true, message: "파일이 업로드되었습니다.", severity: "success" });
    setUploadModalOpen(false);
  };

  const calculateFolderSize = (folder) => { // 폴더 내 파일 크기 계산 기능
    return (
      folder.contents.reduce((total, item) => {
        if (item.type === "file") {
          return total + parseFloat(item.size);
        } else if (item.type === "folder") {
          return total + parseFloat(calculateFolderSize(item));
        }
        return total;
      }, 0).toFixed(2) + "MB"
    );
  };

  const handleContextMenu = (event, item) => { // 우클릭 메뉴 표시 기능
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      item,
    });
  };

  const handleCloseContextMenu = () => { // 우클릭 메뉴 닫기 기능
    setContextMenu({ mouseX: null, mouseY: null, item: null });
  };

  const handleRename = () => { // 파일 또는 폴더 이름 변경 기능
    if (contextMenu.item) {
      const newName = prompt("새 이름을 입력하세요", contextMenu.item.name);
      if (newName) {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === contextMenu.item.id ? { ...item, name: newName } : item
          )
        );
        setSnackbar({ open: true, message: "이름이 변경되었습니다.", severity: "info" });
      }
    }
    handleCloseContextMenu();
  };

  const handleDeleteContextMenu = () => { // 우클릭 메뉴에서 파일 삭제 기능
    if (contextMenu.item) {
      setTrash((prevTrash) => [...prevTrash, { ...contextMenu.item, deletedDate: new Date().toISOString().split("T")[0] }]);
      setData((prevData) => prevData.filter((item) => item.id !== contextMenu.item.id));
      setSnackbar({ open: true, message: "파일이 삭제되었습니다.", severity: "warning" });
    }
    handleCloseContextMenu();
  };

  const handleDownload = (item) => { // 파일 다운로드 기능
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([""], { type: "application/octet-stream" }));
    link.download = item.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSnackbar({ open: true, message: `파일 "${item.name}"이(가) 다운로드되었습니다.`, severity: "info" });
  };

  const handleShare = (item) => { // 파일 공유 기능
    alert(`파일 "${item.name}"이(가) 공유되었습니다.`);
  };

  const handleEdit = (item) => { // 파일 수정 기능
    alert(`파일 "${item.name}"을(를) 수정합니다.`);
  };

  const displayedData = currentFolder ? currentFolder.contents : data;

  return (
    <Box
      sx={{ display: "flex", height: "100vh" }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => e.preventDefault()} // 파일 이동만 가능하게 변경
    >
      <Sidebar
       items={[
        { text: "홈", link: "/", icon: <FolderIcon />, style: { color: "#FFFFFF" } },
        { text: "게시판", link: "/board", icon: <InsertDriveFileIcon />, style: { color: "#FFFFFF" } },
        { text: "캘린더", link: "/calendar", icon: <InsertDriveFileIcon />, style: { color: "#FFFFFF" } },
        { text: "자료실", link: "/storage", icon: <FolderIcon />, style: { color: "#FFFFFF" } },
        { text: "커뮤니티", link: "/community", icon: <InsertDriveFileIcon />, style: { color: "#FFFFFF" } },
        { text: "프로젝트", link: "/project", icon: <FolderIcon />, style: { color: "#FFFFFF" } },
        { text: "채팅", link: "/chat", icon: <InsertDriveFileIcon />, style: { color: "#FFFFFF" } },
      ]}
      />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        {/* 상단 사용자 정보 */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto" }}>
            <Avatar src={userInfo.avatar} alt={userInfo.name} />
            <Box>
              <Typography variant="subtitle1">{userInfo.name}</Typography>
            </Box>
          </Box>
        </Box>

        {/* 저장 용량 표시 */}
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="subtitle1">저장 용량</Typography>
          <LinearProgress variant="determinate" value={usedPercentage} sx={{ height: "8px" }} />
          <Typography variant="caption">
            {usedStorage.toFixed(2)}MB / {totalStorage.toFixed(2)}MB 사용 중 ({usedPercentage}%)
          </Typography>
        </Box>

        {/* 새폴더, 업로드, 삭제 버튼 */}
        <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button variant="contained" onClick={handleNewFolder}>
            새폴더
          </Button>
          <Button variant="contained" onClick={handleUploadClick}>
            업로드
          </Button>
          {/* 전체 선택 및 전체 해제 버튼 - 업로드 버튼 오른쪽으로 위치 조정 */}
          <Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={() => {
            if (checkedItems.length === displayedData.length) {
              setCheckedItems([]);
            } else {
              setCheckedItems(displayedData.map(item => item.id));
            }
          }}>
            {checkedItems.length === displayedData.length ? "전체 해제" : "전체 선택"}
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            삭제
          </Button>
          <Button
            variant="outlined"
            sx={{ marginLeft: "auto" }}
            onClick={() => setCurrentView(currentView === "main" ? "trash" : "main")}
          >
            {currentView === "main" ? `휴지통 (${trash.length})` : "라이브러리로 돌아가기"}
          </Button>
          {currentFolder && (
            <Button variant="outlined" onClick={() => {
              setCurrentFolder(null);
              setBreadcrumbs([]);
            }}>
              뒤로가기
            </Button>
          )}
        </Box>

        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "20px" }}>
            <Link color="inherit" onClick={() => {
              setCurrentFolder(null);
              setBreadcrumbs([]);
            }}>
              홈
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <Link
                key={crumb.id}
                color="inherit"
                onClick={() => {
                  setCurrentFolder(crumb);
                  setBreadcrumbs(breadcrumbs.slice(0, index + 1));
                }}
              >
                {crumb.name}
              </Link>
            ))}
          </Breadcrumbs>
        )}

        {/* 파일 리스트 */}
        {currentView === "main" ? (
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      indeterminate={checkedItems.length > 0 && checkedItems.length < displayedData.length}
                      checked={displayedData.length > 0 && checkedItems.length === displayedData.length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedItems(displayedData.map((item) => item.id));
                        } else {
                          setCheckedItems([]);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>크기</TableCell>
                  <TableCell>업로더</TableCell>
                  <TableCell>권한</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedData.map((item) => (
                  <TableRow
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    onDrop={(e) => handleDrop(e, item)}
                    onClick={() => item.type === "folder" && setCurrentFolder(item)}
                    onContextMenu={(event) => handleContextMenu(event, item)}
                    onDoubleClick={() => handleDownload(item)}
                  >
                    <TableCell>
                      <Checkbox
                        checked={checkedItems.includes(item.id)}
                        onChange={() =>
                          setCheckedItems((prev) =>
                            prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {item.type === "folder" ? <FolderIcon /> : <InsertDriveFileIcon />}
                        {item.name}
                      </Box>
                    </TableCell>
                    <TableCell>{item.type === "folder" ? calculateFolderSize(item) : item.size}</TableCell>
                    <TableCell>{item.uploader}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          const newPermission = prompt("권한을 입력하세요 (공유, 일반, 유료회원)", item.permission || "일반");
                          if (newPermission) {
                            setData((prevData) =>
                              prevData.map((dataItem) =>
                                dataItem.id === item.id ? { ...dataItem, permission: newPermission } : dataItem
                              )
                            );
                            setSnackbar({ open: true, message: "권한이 변경되었습니다.", severity: "info" });
                          }
                        }}
                      >
                        {item.permission || "일반"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box>
            <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
              1달 내에 휴지통의 파일을 비우지 않으시면 자동으로 삭제됩니다.
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <Button variant="contained" onClick={handleRestore}>
                복원
              </Button>
              <Button variant="contained" color="error" onClick={handleEmptyTrash}>
                비우기
              </Button>
            </Box>
            <TableContainer component={Card}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>선택</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>크기</TableCell>
                    <TableCell>업로더</TableCell>
                    <TableCell>삭제 날짜</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trash.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Checkbox
                          checked={checkedItems.includes(item.id)}
                          onChange={() =>
                            setCheckedItems((prev) =>
                              prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                            )
                          }
                        />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.uploader}</TableCell>
                      <TableCell>{item.deletedDate || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* 검색창 위치 조정 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            placeholder="검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            size="small"
            sx={{ width: "300px" }}
          />
          <Button onClick={handleSearch} variant="contained" sx={{ marginLeft: "10px" }}>
            검색
          </Button>
          <Button
            onClick={() => {
              setSearchTerm("");
              setData([...data, ...trash]); // 초기 상태로 복원
            }}
            variant="outlined"
            sx={{ marginLeft: "10px" }}
          >
            초기화
          </Button>
        </Box>

        {/* 우클릭 메뉴 */}
        <Menu
          open={contextMenu.mouseY !== null}
          onClose={handleCloseContextMenu}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu.mouseY !== null && contextMenu.mouseX !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={handleRename}>이름 변경</MenuItem>
          <MenuItem onClick={handleDeleteContextMenu}>삭제</MenuItem>
          <MenuItem
            onClick={() => {
              handleDownload(contextMenu.item);
              handleCloseContextMenu();
            }}
          >
            다운로드
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleEdit(contextMenu.item);
              handleCloseContextMenu();
            }}
          >
            수정
          </MenuItem>
                    <MenuItem
            onClick={() => {
              handleShare(contextMenu.item);
              handleCloseContextMenu();
            }}
          >
            공유
          </MenuItem>
        </Menu>


        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          action={
            <IconButton size="small" color="inherit" onClick={() => setSnackbar({ ...snackbar, open: false })}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        {/* 업로드 모달 */}
        <Modal
          open={uploadModalOpen}
          onClose={() => setUploadModalOpen(false)}
          aria-labelledby="upload-modal-title"
          aria-describedby="upload-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="upload-modal-title" variant="h6" component="h2">
              파일 업로드
            </Typography>
            <Input
              type="file"
              inputProps={{ multiple: true }}
              onChange={handleUploadFiles}
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default FileLibrary;
